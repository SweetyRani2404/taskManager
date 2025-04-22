import React from 'react';
import Task from './Task';
import { useTaskContext } from '../context/TaskContext';

const TaskList = ({ isDarkMode }) => {
  const { tasks } = useTaskContext();

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No tasks to display
        </p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            isDarkMode={isDarkMode}
          />
        ))
      )}
    </div>
  );
};

export default TaskList; 