import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const Task = ({ task, isDarkMode }) => {
  const { toggleComplete, deleteTask } = useTaskContext();

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
    } rounded-xl p-4 shadow-sm border transition-colors duration-200`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className={`w-5 h-5 rounded-full border-gray-300 ${
              isDarkMode ? 'text-purple-500' : 'text-pink-500'
            } focus:ring-0`}
          />
          <div>
            <h3 className={`font-medium ${
              task.completed 
                ? 'line-through text-gray-400' 
                : isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {task.text}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              {task.startTime && task.endTime && (
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {task.startTime} - {task.endTime}
                </span>
              )}
              {task.category && (
                <span className={`text-sm px-2 py-1 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-600 text-purple-300' 
                    : 'bg-pink-100 text-pink-600'
                }`}>
                  {task.category}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          className={`${
            isDarkMode 
              ? 'text-gray-400 hover:text-red-400' 
              : 'text-gray-400 hover:text-red-500'
          } transition-colors`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task; 