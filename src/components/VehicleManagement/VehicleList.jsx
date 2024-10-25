import React, { useState } from 'react';
import './VehicleList.css';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, battery: 40, status: 'Idle' },
    { id: 2, battery: 15, status: 'In Transit' },
    { id: 3, battery: 90, status: 'Charging' },
  ]);
  const [newVehicle, setNewVehicle] = useState({ id: '', battery: '', status: '' });

  const handleAddVehicle = () => {
    setVehicles([...vehicles, newVehicle]);
    setNewVehicle({ id: '', battery: '', status: '' });
  };

  return (
    <div className="vehicle-list card">
      <h2>Vehicle Management</h2>
      <div>
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-item">
            Vehicle {vehicle.id} - Battery: {vehicle.battery}% - Status: {vehicle.status}
          </div>
        ))}
      </div>
      <div className="add-vehicle">
        <input
          type="text"
          placeholder="Vehicle ID"
          value={newVehicle.id}
          onChange={(e) => setNewVehicle({ ...newVehicle, id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Battery"
          value={newVehicle.battery}
          onChange={(e) => setNewVehicle({ ...newVehicle, battery: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newVehicle.status}
          onChange={(e) => setNewVehicle({ ...newVehicle, status: e.target.value })}
        />
        <button onClick={handleAddVehicle} className="vehicle-button">Add Vehicle</button>
      </div>
    </div>
  );
};

export default VehicleList;
