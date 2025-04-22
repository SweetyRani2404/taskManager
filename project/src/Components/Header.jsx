import React from 'react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Hello!
        </h1>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Have a nice day.
        </p>
      </div>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`p-2 rounded-full ${
          isDarkMode ? 'bg-gray-700 text-purple-300' : 'bg-pink-100 text-pink-600'
        }`}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default Header; 