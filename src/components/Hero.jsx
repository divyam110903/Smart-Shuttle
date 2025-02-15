import React, { useState, useEffect, useCallback } from 'react';
import hero_img from '../images/hero.png';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import logo from '../images/logo.png';

const Hero = () => {
  const text = "Your Journey, Our Priority";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  // Typing effect
  const typeText = useCallback(() => {
    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, text]);

  useEffect(() => {
    typeText();
  }, [typeText]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
//logins for admin and user
  const switchToAdmin = () => {
    setIsAdminLogin(true);
  };

  const switchToUser = () => {
    setIsAdminLogin(false);
  };

  return (
    
    <div className="relative h-screen w-full overflow-hidden">
         {/* logo */}
         <div className="fixed top-0 left-0 z-50">
  <img src={logo} alt="Logo" className="w-40 h-auto block" />
</div>
      <div className="flex h-full">
        <div className="w-full h-[90vh] bg-[#f6eee9] relative">
          <img 
            src={hero_img}
            alt="Hero"
            className="h-full w-full object-cover object-center mix-blend-multiply"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-8">
          <div className="relative">
            <h1 className="text-6xl font-bold tracking-tight">
              {displayText}
              {/* Blinking cursor effect */}
              <span className={`inline-block w-0.5 h-8 ml-1 bg-black ${isTypingComplete ? 'animate-pulse' : 'animate-blink'}`}>
                &nbsp;
              </span>
            </h1>

            {isTypingComplete && (
              <div className="mt-8 animate-fade-in">
                <button 
                  onClick={openModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          {/* Blurred background */}
          <div className="fixed inset-0 backdrop-blur-sm z-40"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-3/4 h-3/4 overflow-hidden relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              {isAdminLogin ? (
                <AdminLogin switchToUser={switchToUser} />
              ) : (
                <UserLogin switchToAdmin={switchToAdmin} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;