import React, { useState } from 'react';
import '../css/AddTask.css'; // Import the CSS file

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, description }); // Call onAdd function with task object
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-task-container">
      <h2>Add A New Task</h2>
    <div/>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input
            className="add-task-input"
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <input
            className="add-task-input"
            type="text"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button className="add-task-button" type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
