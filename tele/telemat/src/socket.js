import { io } from "socket.io-client";

// Initialize the socket connection
const socket = io("http://localhost:3000");

export default socket;
