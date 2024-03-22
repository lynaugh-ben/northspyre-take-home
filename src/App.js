import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import MarkTaskCompleted from './components/MarkTaskCompleted';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const handleMarkCompleted = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}/complete`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Failed to mark task as completed');
      }

      fetchTasks();
    } catch (error) {
      console.error('Error marking task as completed:', error.message);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onComplete={handleMarkCompleted} />
    </div>
  );
}

export default App;