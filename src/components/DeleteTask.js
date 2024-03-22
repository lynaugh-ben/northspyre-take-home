import React from 'react';

const DeleteTask = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete();
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default DeleteTask;