import React from 'react';
import UserNavbar from './UserNavbar';
import vehicleImage from '../images/vehicles.jpg';
const BookRide = () => {
  return (
    <div className="h-screen flex flex-col">
     
      <UserNavbar />

    
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-[80vh]">
          
          {/* image */}
          <div className="md:w-1/2 w-full">
          <img  src={vehicleImage}  alt="Car Ride" className="w-full h-auto object-contain bg-transparent  mix-blend-multiply"/>
          </div>

          {/*  Form Section */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Book a Ride</h2>
            <form className="space-y-4">
              
         
              <div>
                <label className="block text-gray-700 font-medium mb-1">Pickup Location</label>
                <input 
                  type="text" 
                  placeholder="Enter pickup location" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

         
              <div>
                <label className="block text-gray-700 font-medium mb-1">Drop-off Location</label>
                <input 
                  type="text" 
                  placeholder="Enter drop-off location" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

     
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

    
              <div>
                <label className="block text-gray-700 font-medium mb-1">Time</label>
                <input 
                  type="time" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

        
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                  Ride 
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookRide;