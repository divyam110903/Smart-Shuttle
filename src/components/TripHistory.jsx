import React, { useState } from 'react';
import UserNavbar from './UserNavbar';
import { Star } from 'lucide-react';
import rateImage from "../images/rate.png";

const TripHistory = () => {
  const trips = [
    { id: 1, date: '2025-02-10', time: '10:30 AM', route: '57-A to 1', driver: 'Ravi Kumar', fare: '$25' },
    { id: 2, date: '2025-02-12', time: '2:00 PM', route: '23 to 56', driver: 'Krish Smith', fare: '$30' },
    { id: 3, date: '2025-02-14', time: '6:45 PM', route: 'X to 43', driver: 'Mike', fare: '$20' },
  ];

  const [feedback, setFeedback] = useState({});
  const [ratings, setRatings] = useState({});

  const handleFeedbackChange = (id, value) => {
    setFeedback({ ...feedback, [id]: value });
  };

  const handleRatingChange = (id, value) => {
    setRatings({ ...ratings, [id]: value });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 pt-20">
      <UserNavbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-semibold text-gray-700 mb-4 text-center">Recent Rides</h1>
        <div className="flex overflow-x-auto space-x-4">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 min-w-[300px] flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900">{trip.route}</h3>
              <p className="text-gray-600">Date: {trip.date}</p>
              <p className="text-gray-600">Time: {trip.time}</p>
              <p className="text-gray-600">Driver: {trip.driver}</p>
              <p className="text-gray-600 font-medium">Fare: {trip.fare}</p>
              <div className="mt-3 w-full">
                <label className="block text-gray-700 font-medium">Feedback:</label>
                <textarea
                  className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your feedback..."
                  value={feedback[trip.id] || ''}
                  onChange={(e) => handleFeedbackChange(trip.id, e.target.value)}
                />
              </div>
              <div className="mt-3 w-full">
                <label className="block text-gray-700 font-medium">Rate the ride:</label>
                <div className="flex space-x-2 mt-2 justify-center">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      className={`w-6 h-6 cursor-pointer ${num <= (ratings[trip.id] || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => handleRatingChange(trip.id, num)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <img src={rateImage} alt="Scenic travel" className="w-80 h-48 object-cover mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
};

export default TripHistory;
