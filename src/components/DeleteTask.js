import React from 'react';
import '../css/DeleteTask.css'; // Import the CSS file

function DeleteTask({ task, onDelete, onCancel }) {
  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    onDelete(task.id);
  };

  const handleCancel = () => {
    // Call the onCancel function passed from the parent component
    onCancel();
  };

  return (
    <div className="delete-task-container">
      <p>Are you sure you want to delete this task?</p>
      <div className="delete-task-buttons">
        <button className="delete-confirm-button" onClick={handleDelete}>Confirm</button>
        <button className="delete-cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteTask;
