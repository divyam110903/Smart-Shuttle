import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/book-ride');
  }, [navigate]);

  return null; 
};

export default UserDashboard;