import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTaskForm = ({ isDarkMode }) => {
  const {
    newTask,
    setNewTask,
    selectedDate,
    setSelectedDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    selectedCategory,
    setSelectedCategory,
    addTask,
    setShowAddTask,
    categories,
    addCategory,
    isAddingCategory,
    setIsAddingCategory,
    newCategory,
    setNewCategory
  } = useTaskContext();

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() === '') return;
    if (categories.includes(newCategory.trim())) return;
    
    const updatedCategories = [...categories, newCategory.trim()];
    setSelectedCategory(newCategory.trim());
    setNewCategory('');
    setIsAddingCategory(false);
  };

  return (
    <div className={`p-4 sm:p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Create a Task
        </h2>
        <button
          onClick={() => setShowAddTask(false)}
          className={`p-2 rounded-full ${
            isDarkMode ? 'bg-gray-700 text-purple-300' : 'bg-pink-100 text-pink-600'
          }`}
        >
          ←
        </button>
      </div>

      <form onSubmit={addTask} className="space-y-4 sm:space-y-6">
        <div>
          <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Task Name
          </label>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task name..."
            className={`w-full p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500' 
                : 'bg-white border-gray-300 focus:ring-pink-500'
            }`}
          />
        </div>

        <div>
          <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`w-full p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' 
                : 'bg-white border-gray-300 focus:ring-pink-500'
            }`}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={`w-full p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' 
                  : 'bg-white border-gray-300 focus:ring-pink-500'
              }`}
            />
          </div>
          <div>
            <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className={`w-full p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' 
                  : 'bg-white border-gray-300 focus:ring-pink-500'
              }`}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <label className={`block mb-2 sm:mb-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Category
            </label>
            <button
              type="button"
              onClick={() => setIsAddingCategory(true)}
              className={`text-sm ${
                isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-pink-500 hover:text-pink-600'
              }`}
            >
              + Add New
            </button>
          </div>
          
          {isAddingCategory ? (
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter category name..."
                className={`flex-1 p-2 rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500' 
                    : 'bg-white border-gray-300 focus:ring-pink-500'
                }`}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-pink-500 hover:bg-pink-600'
                  } text-white`}
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingCategory(false);
                    setNewCategory('');
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  } text-gray-500`}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? isDarkMode 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-pink-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-2 sm:py-3 rounded-lg text-white transition-colors ${
            isDarkMode 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-pink-500 hover:bg-pink-600'
          }`}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm; 