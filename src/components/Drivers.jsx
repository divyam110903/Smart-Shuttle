import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { FaStar, FaPauseCircle, FaPlus } from 'react-icons/fa';
import driver from '../images/driver.png';
import driver2 from '../images/driver2.png';
import driver1 from '../images/driver1.png';
import driver3 from '../images/driverf.png';
import driver4 from '../images/conductor.png';
import driverx from '../images/driver-2.png';
const initialDrivers = [
  { id: 'D123', name: 'Raj Singh', schedule: '9 AM - 6 PM', rating: 4.5, img: driver, onBreak: false },
  { id: 'D456', name: 'Sam', schedule: '10 AM - 7 PM', rating: 4.2, img: driver1, onBreak: false },
  { id: 'D789', name: 'Mohit', schedule: '8 AM - 5 PM', rating: 4.8, img: driver2, onBreak: false },
  { id: 'D729', name: 'Rohini', schedule: '9 AM - 4 PM', rating: 3.8, img: driver3, onBreak: false },
  { id: 'D429', name: 'Raman', schedule: '11 AM - 7 PM', rating: 4.1, img: driver4, onBreak: false },
];

const Drivers = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [newDriver, setNewDriver] = useState({ name: '', startTime: '', endTime: '' });

  const toggleBreak = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, onBreak: !driver.onBreak } : driver
      )
    );
  };

  const handleAddDriver = () => {
    if (!newDriver.name || !newDriver.startTime || !newDriver.endTime) return;

    const newId = `D${Math.floor(Math.random() * 900) + 100}`;
    const newSchedule = `${newDriver.startTime} - ${newDriver.endTime}`;
    
    setDrivers([...drivers, { id: newId, name: newDriver.name, schedule: newSchedule, rating: 4.0, img: driverx, onBreak: false }]);
    setNewDriver({ name: '', startTime: '', endTime: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AdminNavbar />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Drivers</h1>
      <div className="mb-6 flex gap-4">
        <input type="text" placeholder="Name" value={newDriver.name} 
        onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Start Time" value={newDriver.startTime} onChange={(e) => setNewDriver({ ...newDriver, startTime: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="End Time" value={newDriver.endTime} onChange={(e) => setNewDriver({ ...newDriver, endTime: e.target.value })} className="p-2 border rounded" />
        <button onClick={handleAddDriver} className="bg-green-500 text-white px-4 py-2 rounded flex items-center"><FaPlus className="mr-2" />Add Driver </button>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={driver.img} alt={driver.name} className="w-20 h-20 rounded-full mb-3" />
            <h2 className="text-lg font-semibold">{driver.name}</h2>
            <p className="text-gray-600">Schedule: {driver.schedule}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <span className="ml-1 text-gray-700">{driver.rating}</span>
            </div>
            <button
              className={`mt-4 px-4 py-2 rounded-lg flex items-center ${driver.onBreak ? 'bg-yellow-500' : 'bg-red-500'} text-white`}
              onClick={() => toggleBreak(driver.id)}
            >
              <FaPauseCircle className="mr-2" /> {driver.onBreak ? 'On Break' : 'Give Break'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;