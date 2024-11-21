const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ["GET", "POST"],
}));

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"],
  },
});

let users = {}; // Store user locations by their IDs

app.get("/", (req, res) => {
  res.send("Welcome to the Socket.IO server!");
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for location updates from clients
  socket.on("send-location", (data) => {
    const { latitude, longitude } = data;
    users[socket.id] = { id: socket.id, latitude, longitude };
    io.emit("receive-location", users[socket.id]); // Broadcast to all connected clients
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    delete users[socket.id];
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
