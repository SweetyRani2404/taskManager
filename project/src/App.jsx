import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';
import AddTaskForm from './components/AddTaskForm';
import { TaskProvider, useTaskContext } from './context/TaskContext';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const { showAddTask, setShowAddTask } = useTaskContext();

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const bgColor = isDarkMode 
    ? 'bg-gradient-to-br from-purple-900 to-pink-900' 
    : 'bg-gradient-to-br from-pink-100 to-peach-200';

  return (
    <div className={`min-h-screen ${bgColor} p-4 transition-colors duration-300`}>
      <div className={`max-w-md mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-xl overflow-hidden transition-colors duration-300`}>
        {!showAddTask ? (
          <>
            <div className="p-6">
              <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <TaskFilters isDarkMode={isDarkMode} />
              <TaskList isDarkMode={isDarkMode} />
            </div>
            <AddTaskButton onClick={() => setShowAddTask(true)} isDarkMode={isDarkMode} />
          </>
        ) : (
          <AddTaskForm isDarkMode={isDarkMode} />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;
