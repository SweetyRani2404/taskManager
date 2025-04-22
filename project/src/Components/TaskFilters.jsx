import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilters = ({ isDarkMode }) => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
      <button
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          filter === 'all'
            ? isDarkMode ? 'bg-purple-600 text-white' : 'bg-pink-500 text-white'
            : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-pink-100 text-pink-600'
        }`}
        onClick={() => setFilter('all')}
      >
        My Tasks
      </button>
      <button
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          filter === 'active'
            ? isDarkMode ? 'bg-purple-600 text-white' : 'bg-pink-500 text-white'
            : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-pink-100 text-pink-600'
        }`}
        onClick={() => setFilter('active')}
      >
        In Progress
      </button>
      <button
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          filter === 'completed'
            ? isDarkMode ? 'bg-purple-600 text-white' : 'bg-pink-500 text-white'
            : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-pink-100 text-pink-600'
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilters; 