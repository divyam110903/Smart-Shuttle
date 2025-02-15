import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  return <Navigate to="/admin/bookings" replace />;
};

export default AdminDashboard;