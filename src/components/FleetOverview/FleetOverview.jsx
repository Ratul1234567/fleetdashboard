// src/components/FleetOverview/FleetOverview.jsx
import React from 'react';
import './FleetOverview.css';

const FleetOverview = ({ fleetData = [] }) => {
  if (!fleetData || fleetData.length === 0) {
    return <p className="fleet-empty">No fleet data available</p>;
  }

  return (
    <div className="fleet-overview">
      <h2>Fleet Overview</h2>
      <ul>
        {fleetData.map((vehicle, index) => (
          <li key={index} className="vehicle-item">
            <h3>{vehicle.name}</h3>
            <p>Status: {vehicle.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FleetOverview;
