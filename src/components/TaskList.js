import React from 'react';

function TaskList({ tasks, onDelete, onComplete }) {
  // Filter out completed tasks
  const incompleteTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {incompleteTasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;