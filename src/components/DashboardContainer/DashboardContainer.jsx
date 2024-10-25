// src/components/DashboardContainer/DashboardContainer.jsx
import React from 'react';
import FleetOverview from '../FleetOverview/FleetOverview';
import BatteryAlert from '../BatteryAlerts/BatteryAlert';
import RealTimeStatus from '../RealTimeStatus/RealTimeStatus';
import './DashboardContainer.css';

const DashboardContainer = ({ fleetData }) => (
  <div className="dashboard-container">
    <FleetOverview fleetData={fleetData} />
    <BatteryAlert fleetData={fleetData} />
    <RealTimeStatus fleetData={fleetData} />
  </div>
);

export default DashboardContainer;
//import BatteryAlert from '../BatteryAlert/BatteryAlert';
