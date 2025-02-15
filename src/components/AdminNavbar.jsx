import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Users, BarChart3, ClipboardList } from 'lucide-react';
import logo from '../images/logo.png';

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="h-40 w-auto mt-10" src={logo} alt="Logo" />
          </Link>

          <div className="flex items-center space-x-8">
            <NavLink 
              to="/admin/bookings"
              icon={<ClipboardList size={20} />} 
              text="Bookings"
              isActive={location.pathname === '/admin/bookings'}
            />
            <NavLink 
              to="/admin/drivers"
              icon={<Users size={20} />} 
              text="Drivers"
              isActive={location.pathname === '/admin/drivers'}
            />
            <NavLink 
              to="/admin/analytics"
              icon={<BarChart3 size={20} />} 
              text="Analytics"
              isActive={location.pathname === '/admin/analytics'}
            />
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

export default AdminNavbar;
