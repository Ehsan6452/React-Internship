import React, { useState } from 'react';
import './List.css';

export default function List({ onAddTodo, onCategoryChange }) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoCategory, setNewTodoCategory] = useState('All');

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      onAddTodo(newTodoTitle, newTodoCategory);
      setNewTodoTitle('');
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setNewTodoCategory(selectedCategory); 
    onCategoryChange(selectedCategory); 
  };

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className='TodoTitle'
          name='TodoTitle'
          placeholder='What do you want to do?'
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <select
          name="TodoCategories"
          id="TodoCategories"
          value={newTodoCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>
        <button type="button" className='btnAdd' onClick={handleAddTodo}>
          Add
        </button>
      </form>
    </section>
  );
}