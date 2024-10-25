// src/components/BatteryAlert/BatteryAlert.jsx
import React from 'react';
import './BatteryAlert.css';

const BatteryAlert = ({ fleetData = [] }) => {
  const lowBatteryVehicles = fleetData.filter(vehicle => vehicle.batteryLevel <= 20);

  if (lowBatteryVehicles.length === 0) {
    return <p className="no-alert">All vehicles have sufficient battery levels</p>;
  }

  return (
    <div className="battery-alert">
      <h2>Low Battery Alert</h2>
      <ul>
        {lowBatteryVehicles.map((vehicle, index) => (
          <li key={index} className="alert-item">
            <p>{vehicle.name} - {vehicle.batteryLevel}% battery</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BatteryAlert;
