import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Aopt from '../pages/Aopt';
import Live from './Live';


const Dashboard1 = () => {
  // State to store fetched data
  const [dashboardData, setDashboardData] = useState({
    overviewMetrics: {
      parcelsInTransit: 0,
      completedDeliveries: 0,
      pendingDeliveries: 0,
    },
    fuelEfficiency: {
      averageFuelConsumption: 0,
      fuelCostTrends: [],
    },
    capacityUtilization: {
      capacityUsed: 0,
      capacityLeft: 0,
      truckID: '',
    },
    deliveryInfo: {
      trackingNumber: '',
      pickupLocation: '',
      contactPerson: '',
      destination: '',
    },
    mapInfo: {
      coordinates: '',
      checkpoints: 0,
    },
  });

  // Fetch data from the backend
  useEffect(() => {
    // Simulate API call (replace with your actual backend call)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard-data');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-gray-200 to-blue-100 p-4">
      {/* Navbar */}
      <Navbar
        style={{
          backgroundColor: 'darkblue',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-4 mt-20">
        {/* Left Panel */}
        <div className="col-span-1 bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Overview Metrics</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-3 rounded-md">
              <p>Total Parcels in Transit: {dashboardData.overviewMetrics.parcelsInTransit}</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-md">
              <p>Completed Deliveries Today: {dashboardData.overviewMetrics.completedDeliveries}</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-md">
              <p>Pending Deliveries: {dashboardData.overviewMetrics.pendingDeliveries}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-4">Fuel Efficiency</h2>
          <div className="bg-gray-700 p-3 rounded-md">
            <p>Average Fuel Consumption: {dashboardData.fuelEfficiency.averageFuelConsumption}</p>
            <div className="h-16 bg-purple-400 mt-2"></div>
          </div>
          <div className="bg-gray-700 p-3 rounded-md mt-2">
            <p>Fuel Cost Trends: {dashboardData.fuelEfficiency.fuelCostTrends.join(', ')}</p>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-4">Capacity Utilization</h2>
          <div className="bg-gray-700 p-3 rounded-md">
            <p>{dashboardData.capacityUtilization.capacityUsed}% capacity used</p>
            <p>{dashboardData.capacityUtilization.capacityLeft}% left in Truck {dashboardData.capacityUtilization.truckID}</p>
          </div>
        </div>

        {/* Center Panel - Map */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg relative">
          <div className="absolute top-4 left-4">
            <button className="bg-gray-200 rounded-full w-8 h-8"></button>
            <button className="bg-gray-200 rounded-full w-8 h-8 mx-2"></button>
            <button className="bg-gray-200 rounded-full w-8 h-8"></button>
          </div>
          {/* Map (replace with your actual map or dynamic data) */}
          <Live />
          <div className="absolute bottom-4 left-4 text-sm bg-white p-2 rounded-md shadow-md">
            <p>{dashboardData.mapInfo.coordinates}</p>
            <p>{dashboardData.mapInfo.checkpoints} Checkpoints</p>
          </div>
        </div>
      
        {/* Right Panel */}
        <div className="col-span-1 bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <div className="bg-gray-700 p-4 rounded-md">
            <p>Parcel ID/Tracking Number: {dashboardData.deliveryInfo.trackingNumber}</p>
            <p className="mt-2">Pickup: {dashboardData.deliveryInfo.pickupLocation}</p>
            <p className="mt-2">Contact Person: {dashboardData.deliveryInfo.contactPerson}</p>
            <p className="mt-2">
              Destination: <span className="bg-orange-500 px-2 py-1 rounded">{dashboardData.deliveryInfo.destination}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
