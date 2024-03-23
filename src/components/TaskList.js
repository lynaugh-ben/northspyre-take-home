import React, { useState } from 'react';
import DeleteTask from './DeleteTask';
//import AddTask from './AddTask'; // Import the AddTask component
import '../css/TaskList.css';

function TaskList({ tasks, onDelete, onComplete, onAdd }) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Filter tasks based on showCompleted state
  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks.filter(task => !task.completed);

  const handleDeleteClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowDeletePrompt(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedTaskId);
    setShowDeletePrompt(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePrompt(false);
  };

  return (
    <div className="task-list-container">
      <div className="header-container"> {/* Parent container for header elements */}
        <h2>Task List</h2>
      </div>
      <div className="task-tab-container">
        <button onClick={() => setShowCompleted(false)} className={`task-tab${!showCompleted ? ' active' : ''}`}>Incomplete</button>
        <button onClick={() => setShowCompleted(true)} className={`task-tab${showCompleted ? ' active' : ''}`}>Completed</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-details">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="task-actions">
              {showDeletePrompt && selectedTaskId === task.id ? (
                <DeleteTask task={task} onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />
              ) : (
                <button onClick={() => handleDeleteClick(task.id)} className="delete-button">Delete</button>
              )}
              <button onClick={() => onComplete(task.id)} className="complete-button">{task.completed ? 'Reopen' : 'Complete'}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
