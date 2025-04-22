import React from 'react';

const AddTaskButton = ({ onClick, isDarkMode }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 w-14 h-14 ${
        isDarkMode ? 'bg-purple-600' : 'bg-pink-500'
      } rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-all`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  );
};

export default AddTaskButton; 