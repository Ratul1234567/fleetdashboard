// src/App.jsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#003366' }, // Dark blue
    secondary: { main: '#FF6600' }, // Orange
    background: { default: '#f4f6f8' },
    text: { primary: '#333', secondary: '#666' },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  const fleetData = [
    { name: 'Truck 1', status: 'Running', batteryLevel: 45, location: 'New York' },
    { name: 'Van 2', status: 'Idle', batteryLevel: 15, location: 'Los Angeles' },
    { name: 'Bike 3', status: 'Charging', batteryLevel: 80, location: 'San Francisco' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <DashboardContainer fleetData={fleetData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
