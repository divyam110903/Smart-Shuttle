import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Mail, Lock, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const AdminLogin = ({ switchToUser }) => {

   const navigate = useNavigate(); 

   const [username, setUsername] = useState("admin@mail.com");
   const [password, setPassword] = useState("@admin1995");
   const [error, setError] = useState("");
   const hardcodedAdmin = {
    username: "admin@mail.com",
    password: "@admin1995",
  };
  
      const handleLogin = (e) => {
        e.preventDefault();
        navigate("/admin-dashboard");
      };
  return (

    <div style={{ background: 'transparent', backdropFilter: 'none' }} className="flex justify-center items-center">
      <div className="flex p-6 max-w-3xl w-full">
        
        {/* Animation Section */}
        <div className="w-1/2 flex items-center justify-center h-[500px]">
          <DotLottieReact
            src="https://lottie.host/44857810-b216-40da-bca5-e68a6215b7aa/1hSVCLyNXT.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Login Section */}
        <div className="w-1/2 p-8 max-w-[400px] bg-[#FBFBFB]">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Login</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="email" 
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all" 
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white text-lg font-medium p-3 rounded-lg hover:bg-blue-600 transition-colors mt-6"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center">
            <button 
              onClick={switchToUser} 
              className="text-blue-500 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <User className="h-5 w-5" />
              Login as User
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;