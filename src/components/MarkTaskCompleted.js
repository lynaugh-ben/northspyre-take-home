import React from 'react';

const MarkTaskCompleted = ({ onComplete }) => {
  return (
    <div>
      <button onClick={onComplete}>Mark as Completed</button>
    </div>
  );
};

export default MarkTaskCompleted;