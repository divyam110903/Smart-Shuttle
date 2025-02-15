import React from 'react';
import AdminNavbar from './AdminNavbar';
import { FaMapMarkerAlt, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import man1 from '../images/man.png';
import man2 from '../images/man-2.png';
import man3 from '../images/boy.png';
import man4 from '../images/gamer.png';
import man5 from '../images/girl.png';
const Bookings = () => {
  const bookings = [
    { id: 'B001', driverId: 'D123', user: 'Karan', pickup: 'Location A', drop: 'Location B', duration: '15 min', status: 'Completed', userImg:man1 },
    { id: 'B002', driverId: 'D456', user: 'Yash Singh', pickup: 'Location C', drop: 'Location D', duration: '30 min', status: 'Pending', userImg: man2 },
    { id: 'B003', driverId: 'D789', user: 'Akshit', pickup: 'Location E', drop: 'Location F', duration: '20 min', status: 'Cancelled', userImg: man3},
    { id: 'B004', driverId: 'D989', user: 'Roy', pickup: 'Location A', drop: 'Location E', duration: '25 min', status: 'Pending', userImg: man4},
    { id: 'B005', driverId: 'D789', user: 'Ruchi', pickup: 'Location C', drop: 'Location F', duration: '25 min', status: 'Completed', userImg: man5},
  ];

  const statusStyles = {
    Completed: { bg: 'bg-green-100', text: 'text-green-800', icon: <FaCheckCircle className="text-green-500" /> },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: <FaClock className="text-yellow-500" /> },
    Cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: <FaTimesCircle className="text-red-500" /> },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Booking Management</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Booking ID</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Driver ID</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Pickup</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Drop</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.driverId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={booking.userImg} alt="User" className="w-10 h-10 rounded-full object-cover" />
                        <span className="ml-3 text-sm font-medium text-gray-900">{booking.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-blue-500 mr-2" />
                        <span className="text-sm text-gray-600">{booking.pickup}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-red-500 mr-2" />
                        <span className="text-sm text-gray-600">{booking.drop}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusStyles[booking.status].bg} ${statusStyles[booking.status].text}`}>
                        {statusStyles[booking.status].icon}
                        <span className="ml-2">{booking.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;