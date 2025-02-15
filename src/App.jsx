import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import UserLogin from "./components/UserLogin.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import BookRide from "./components/BookRide.jsx";
import TripHistory from "./components/TripHistory.jsx";
import Bookings from "./components/Bookings.jsx";
import Drivers from "./components/Drivers.jsx";
import Analytics from "./components/Analytics.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/book-ride" element={<BookRide />} />
      <Route path="/trip-history" element={<TripHistory />} />
      <Route path="/admin/bookings" element={<Bookings />} />
      <Route path="/admin/drivers" element={<Drivers />} />
      <Route path="/admin/analytics" element={<Analytics />} />

    </Routes>
  );
}

export default App;