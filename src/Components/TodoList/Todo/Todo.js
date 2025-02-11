import React, { useState } from 'react';
import './Todo.css';

export default function Todo(props) {
  const { Title, IsCompleted: initialIsCompleted, onDelete, onToggleComplete } = props;

  
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);

 
  const handleToggleComplete = () => {
    const newIsCompleted = !isCompleted;
    setIsCompleted(newIsCompleted); 
    onToggleComplete(newIsCompleted); 
  };

 
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className='Todo'>
      <h2 className={isCompleted ? 'Completed' : 'NotCompleted'}>{Title}</h2>
      <button
        type='button'
        className='btnComplete'
        onClick={handleToggleComplete}
      >
        {isCompleted ? '🔃' : '✅'}
      </button>
      <button
        type='button'
        className='btnDelete'
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
}