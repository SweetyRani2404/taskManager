import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : ['Design', 'Meeting', 'Coding', 'Quick call'];
  });

  const [filter, setFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [newTask, setNewTask] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() === '') return;
    if (categories.includes(newCategory.trim())) return;
    
    const updatedCategories = [...categories, newCategory.trim()];
    setCategories(updatedCategories);
    setSelectedCategory(newCategory.trim());
    setNewCategory('');
    setIsAddingCategory(false);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        date: selectedDate,
        category: selectedCategory,
        startTime,
        endTime,
      },
    ]);
    setNewTask('');
    setShowAddTask(false);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const value = {
    tasks: filteredTasks,
    filter,
    setFilter,
    selectedDate,
    setSelectedDate,
    selectedCategory,
    setSelectedCategory,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    newTask,
    setNewTask,
    showAddTask,
    setShowAddTask,
    addTask,
    toggleComplete,
    deleteTask,
    categories,
    addCategory,
    isAddingCategory,
    setIsAddingCategory,
    newCategory,
    setNewCategory
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}; 