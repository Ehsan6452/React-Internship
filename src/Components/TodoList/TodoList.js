import React, { useState } from 'react';
import Header from './Header/Header';
import List from './List/List';
import Todo from './Todo/Todo';
import "./TodoList.css"

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, Title: 'My personall task', IsCompleted: false, Category: 'Personal' },
    { id: 2, Title: 'My work task', IsCompleted: true, Category: 'Work' },
    { id: 3, Title: 'my Family task', IsCompleted: false, Category: 'Family' },
    { id: 4, Title: 'more task', IsCompleted: false, Category: 'Other' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All'); 

 
  const handleToggleComplete = (id, newIsCompleted) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, IsCompleted: newIsCompleted } : todo
      )
    );
  };

 
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  
  const handleAddTodo = (newTodoTitle, newTodoCategory) => {
    const newTodo = {
      id: todos.length + 1,
      Title: newTodoTitle,
      IsCompleted: false,
      Category: newTodoCategory,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

 
  const filteredTodos = selectedCategory === 'All'
    ? todos
    : todos.filter((todo) => todo.Category === selectedCategory);

  return (
    <section className='TodoList'>
      <Header />
      <List onAddTodo={handleAddTodo} onCategoryChange={setSelectedCategory} />
      <div className='List'>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            Title={todo.Title}
            IsCompleted={todo.IsCompleted}
            onToggleComplete={(newIsCompleted) =>
              handleToggleComplete(todo.id, newIsCompleted)
            }
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </section>
  );
}