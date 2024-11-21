import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import io from "socket.io-client";

// Socket connection to send location updates
const socket = io("http://localhost:3000"); // Update with your server address

const AdjustMapBounds = ({ route, startPoint, endPoint }) => {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      const bounds = L.latLngBounds(route);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (startPoint && endPoint) {
      const bounds = L.latLngBounds([startPoint, endPoint]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [route, startPoint, endPoint, map]);

  return null;
};

const Aopt = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [eta, setETA] = useState(null);
  const [averageDelay, setAverageDelay] = useState(null);

  // Get user's current location
  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStartPoint({ lat: latitude, lng: longitude });
          setStartLocation(`Current Location`);
          // Emit the location to the server
          socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Failed to fetch your location. Please enable location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const geocodeLocation = async (address) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lng: parseFloat(lon) };
      } else {
        alert(`Location not found: ${address}`);
      }
    } catch (error) {
      console.error("Error geocoding location:", error);
      alert("Failed to fetch location. Please try again.");
    }
    return null;
  };

  const getOptimizedRoutes = async (start, end) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=true`
      );
      const routesData = response.data.routes.map((route) => ({
        coordinates: route.geometry.coordinates.map((coord) => [coord[1], coord[0]]),
        duration: route.duration, // in seconds
        trafficSegments: simulateTraffic(route.geometry.coordinates), // Simulated traffic
      }));
      setRoutes(routesData);
      setCurrentRouteIndex(0);
      setETA(formatDuration(routesData[0].duration));
      calculateTrafficDelay(routesData[0]);
    } catch (error) {
      console.error("Error fetching routes from OSRM:", error);
      alert("Failed to fetch routes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const simulateTraffic = (coordinates) => {
    const trafficSegments = [];
    for (let i = 0; i < coordinates.length - 1; i += 10) {
      trafficSegments.push({
        start: [coordinates[i][1], coordinates[i][0]],
        end: [coordinates[i + 1][1], coordinates[i + 1][0]],
        severity: Math.random() > 0.5 ? "heavy" : "none", // Randomize traffic
        delay: Math.random() > 0.5 ? Math.random() * 30 + 10 : 0, // Simulated delay in seconds
      });
    }
    return trafficSegments;
  };

  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const calculateTrafficDelay = (route) => {
    const trafficSegments = route.trafficSegments;
    const heavySegments = trafficSegments.filter((segment) => segment.severity === "heavy");
    const totalDelay = heavySegments.reduce((sum, segment) => sum + segment.delay, 0);
    const averageDelay = heavySegments.length > 0 ? totalDelay / heavySegments.length : 0;
    setAverageDelay(averageDelay.toFixed(2)); // Average delay in seconds
  };

  const handleGetRoute = async () => {
    if (!startLocation || !endLocation) {
      alert("Please enter both start and end locations.");
      return;
    }

    const startCoords = startPoint || (await geocodeLocation(startLocation));
    const endCoords = await geocodeLocation(endLocation);

    if (startCoords && endCoords) {
      setStartPoint(startCoords);
      setEndPoint(endCoords);
      getOptimizedRoutes(startCoords, endCoords);
    }
  };

  const handleNextRoute = () => {
    if (routes.length > 1) {
      const nextIndex = (currentRouteIndex + 1) % routes.length;
      setCurrentRouteIndex(nextIndex);
      setETA(formatDuration(routes[nextIndex].duration));
      calculateTrafficDelay(routes[nextIndex]);
    }
  };

  const markerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 25],
  });

  return (
    <div>
      <h1>Route Optimizer with Traffic Simulation</h1>
      <p>Enter start and end locations manually to calculate optimized routes and visualize traffic.</p>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          placeholder="Enter start location"
          style={{ padding: "5px", width: "35%", marginRight: "10px" }}
        />
        <button
          onClick={useCurrentLocation}
          style={{
            padding: "10px",
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Use My Location
        </button>
        <input
          type="text"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
          placeholder="Enter end location"
          style={{ padding: "5px", width: "45%" }}
        />
        <button
          onClick={handleGetRoute} // This was missing previously
          style={{
            padding: "10px",
            marginLeft: "10px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Get Routes"}
        </button>
        {routes.length > 1 && (
          <button
            onClick={handleNextRoute}
            style={{
              padding: "10px",
              marginLeft: "10px",
              backgroundColor: "#2196f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next Route
          </button>
        )}
      </div>
      {eta && <p>Estimated Time of Arrival: {eta}</p>}
      {averageDelay && <p>Average Delay Due to Traffic: {averageDelay} seconds</p>}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {startPoint && (
          <Marker position={[startPoint.lat, startPoint.lng]} icon={markerIcon}>
            <Popup>Start Point</Popup>
          </Marker>
        )}
        {endPoint && (
          <Marker position={[endPoint.lat, endPoint.lng]} icon={markerIcon}>
            <Popup>End Point</Popup>
          </Marker>
        )}
        {routes.length > 0 && (
          <>
            <Polyline positions={routes[currentRouteIndex].coordinates} color="blue" />
            {routes[currentRouteIndex].trafficSegments.map(
              (segment, index) =>
                segment.severity === "heavy" && (
                  <Polyline
                    key={index}
                    positions={[segment.start, segment.end]}
                    color="red"
                    weight={6}
                    opacity={0.7}
                  />
                )
            )}
          </>
        )}
        <AdjustMapBounds
          route={routes[currentRouteIndex]?.coordinates || []}
          startPoint={startPoint}
          endPoint={endPoint}
        />
      </MapContainer>
    </div>
  );
};

export default Aopt;
