import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import socket from "../socket";

const Live = () => {
  const [locations, setLocations] = useState([]);
  const mapRef = useRef(null); // Reference for the map instance
  const markerLayerRef = useRef(null); // Reference for the marker layer

  useEffect(() => {
    // Initialize the map only once
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      markerLayerRef.current = L.layerGroup().addTo(mapRef.current); // Group for markers
    }

    // Listen for location updates from the server
    socket.on("receive-location", (data) => {
      const { id, latitude, longitude } = data;
      const latLng = [latitude, longitude];

      // Add a marker for the new location
      const marker = L.marker(latLng)
        .bindPopup(`User ID: ${id}`)
        .openPopup();

      markerLayerRef.current.addLayer(marker); // Add to marker layer

      setLocations((prevLocations) => [...prevLocations, { id, latLng }]);

      // Center the map on the new location
      mapRef.current.setView(latLng, 13); // Adjust zoom level if necessary
    });

    // Send location updates (mocked using geolocation API)
    const locationInterval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
          },
          (error) => {
            console.error("Geolocation error:", error);
          }
        );
      }
    }, 5000); // Send every 5 seconds

    return () => {
      socket.off("receive-location");
      clearInterval(locationInterval);
    };
  }, []);

  return (
    <div>
      <h1>Realtime Device Tracker</h1>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      <div>
        <h2>Location Data</h2>
        <ul>
          {locations.map((loc, index) => (
            <li key={index}>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Live;
