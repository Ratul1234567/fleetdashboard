// src/components/RealTimeStatus/RealTimeStatus.jsx
import React from 'react';
import './RealTimeStatus.css';

const RealTimeStatus = ({ fleetData = [] }) => {
  if (!fleetData || fleetData.length === 0) {
    return <p className="status-empty">No status updates available</p>;
  }

  return (
    <div className="real-time-status">
      <h2>Real-Time Fleet Status</h2>
      <ul>
        {fleetData.map((vehicle, index) => (
          <li key={index} className="status-item">
            <p>{vehicle.name} - {vehicle.location}</p>
            <p>Status: {vehicle.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeStatus;
