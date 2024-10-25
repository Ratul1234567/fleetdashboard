import React, { useState } from 'react';
import './AddVehicleForm.css';

const AddVehicleForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [batteryLevel, setBatteryLevel] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const batteryValue = parseInt(batteryLevel);

        if (!name.trim()) {
            setError('Vehicle name is required.');
            return;
        }

        if (isNaN(batteryValue) || batteryValue < 0 || batteryValue > 100) {
            setError('Battery level must be a number between 0 and 100.');
            return;
        }

        onAdd({
            id: Date.now(),
            name: name.trim(),
            batteryLevel: batteryValue,
            status: 'Idle',
        });

        // Reset the form and error
        setName('');
        setBatteryLevel('');
        setError('');
    };

    return (
        <div className="add-vehicle-form">
            <h2>Add New Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Vehicle Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Battery Level (0-100):</label>
                    <input
                        type="number"
                        value={batteryLevel}
                        onChange={(e) => setBatteryLevel(e.target.value)}
                        required
                        min="0"
                        max="100"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
};

export default AddVehicleForm;
