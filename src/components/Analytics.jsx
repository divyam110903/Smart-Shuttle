import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const barData = {
  labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
  datasets: [
    {
      label: 'Shuttle Usage',
      data: [30, 45, 60, 50, 70, 40],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Customer Ratings',
      data: [4.2, 4.5, 4.0, 4.3, 4.6, 4.4, 4.7],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
  ],
};

const pieData = {
  labels: ['Completed', 'Cancelled', 'Pending'],
  datasets: [
    {
      data: [75, 15, 10],
      backgroundColor: ['#4CAF50', '#FF5733', '#FFC300'],
    },
  ],
};

const doughnutData = {
  labels: ['Morning (6 AM - 12 PM)', 'Afternoon (12 PM - 6 PM)', 'Evening (6 PM - 12 AM)'],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AdminNavbar />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Analytics</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold">Total Rides Today</h2>
          <p className="text-3xl text-blue-600">120</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold">Average Rating</h2>
          <p className="text-3xl text-green-600">4.5 ★</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold">Peak Hour</h2>
          <p className="text-3xl text-red-600">6 PM - 9 PM</p>
        </div>
      </div>
      
      {/* Data visulisation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shuttle Usage Throughout the Day</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Ratings Over Time</h2>
          <Line data={lineData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
  <h2 className="text-lg font-semibold mb-4">Ride Status Distribution</h2>
  <div className="w-120 h-60">
    <Pie data={pieData} options={{ maintainAspectRatio: false, responsive: true }} />
  </div>
</div>
<div className="bg-white shadow-lg rounded-lg p-6">
  <h2 className="text-lg font-semibold mb-4">Peak Hour Distribution</h2>
  <div className="w-120 h-60">
    <Doughnut data={doughnutData} options={{ maintainAspectRatio: false, responsive: true }} />
  </div>
</div>
      </div>
    </div>
  );
};

export default Analytics;