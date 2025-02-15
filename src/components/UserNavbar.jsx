import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Car, Clock, Bell } from 'lucide-react';
import logo from '../images/logo.png';

const UserNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { id: 1, message: "Your ride with Ravi Kumar was completed." },
    { id: 2, message: "New promotional discounts available!" },
  ];

  return (

    //logo
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="h-30 w-auto mt-10" src={logo} alt="Logo" />
          </Link>

          {/* Navigation bar */}
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/"
              icon={<Home size={20} />} 
              text="Home"
              isActive={location.pathname === '/'}
            />
            <NavLink 
              to="/book-ride"
              icon={<Car size={20} />} 
              text="Book Ride"
              isActive={location.pathname === '/book-ride'}
            />
            <NavLink 
              to="/trip-history"
              icon={<Clock size={20} />} 
              text="Trip History"
              isActive={location.pathname === '/trip-history'}
            />
            
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <ul className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                      <li key={notification.id} className="p-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        {notification.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
        ${isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  );
};

export default UserNavbar;
