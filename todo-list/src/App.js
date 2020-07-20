import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoContext from './context/todoContext';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, [todos]);

  const ToggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]);
  };

  return (
    <TodoContext.Provider value={{ removeTodo }}>
      <div className='App'>
        <h1>Todo list</h1>
        {todos.length ? (
          <TodoList todos={todos} onToggle={ToggleTodo} />
        ) : (
          'No things to do!'
        )}
        <AddTodo onCreate={addTodo} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
