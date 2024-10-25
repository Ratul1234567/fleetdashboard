import React, { useState } from 'react';

const ChargingSchedule = ({ vehicles, setVehicles }) => {
  const [schedule, setSchedule] = useState([]);

  const addSchedule = (vehicleId, time) => {
    setSchedule([...schedule, { vehicleId, time }]);
  };

  return (
    <div>
      <h2>Charging Schedule</h2>
      {schedule.map((item, index) => (
        <div key={index}>
          Vehicle {item.vehicleId} will charge at {item.time}
        </div>
      ))}
    </div>
  );
};

export default ChargingSchedule;
