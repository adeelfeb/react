import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputURL from '../../pages/InputURL';
import { logout } from '../../store/authSlice'; // assuming you have a logout action
import authService from '../../AserverAuth/auth';

function Dashboard() {
  const user = useSelector((state) => state.auth.userData);
  const [activePage, setActivePage] = useState('inputURL'); // Track active page
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    // Assuming authService.logout is a function that logs out the user
    authService.logout().then(() => {
      dispatch(logout()); // Dispatch the logout action to update the Redux store
      navigate('/login'); // Redirect to the login page
    });
  };

  // Inline style for typing effect
  const typingEffectStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '0',
    animation: 'typing 3s steps(30) 1s forwards', // Adjust timing and steps as needed
    fontFamily: "'Courier New', monospace", // Optional: typewriter-like font
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Left Sidebar Section with Background Color */}
      <div className="w-full lg:w-1/5 bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Inject keyframes globally with inline style (not ideal for large apps, but okay for small demos) */}
        <style>{`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        `}</style>

        {/* Typing effect applied to this text */}
        <p className="text-xl font-semibold mb-4">
          <span style={typingEffectStyle}>
            Welcome, {user.fullname || user.username}!
          </span>
        </p>

        {/* Horizontal list of buttons with links */}
        <div className="flex space-x-4 overflow-x-auto mb-6 lg:flex-col lg:space-x-0 lg:space-y-4">
          <button
            onClick={() => setActivePage('inputURL')}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              activePage === 'inputURL' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Input URL
          </button>
          <button
            onClick={() => setActivePage('another')}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              activePage === 'another' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Another Page
          </button>
          <button
            onClick={() => setActivePage('settings')}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              activePage === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Settings
          </button>

          {/* Logout Button */}
          <button
            onClick={logoutHandler}
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 mt-4"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Right Content Section with a Different Background Color */}
      <div className="flex-grow p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        {activePage === 'inputURL' && <InputURL />}
        {/* {activePage === 'another' && <AnotherComponent />} */}
        {/* {activePage === 'settings' && <Settings />} */}
      </div>
    </div>
  );
}

export default Dashboard;
