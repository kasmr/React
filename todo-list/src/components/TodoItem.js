import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../context/todoContext';

const TodoItem = ({ todo, index, onChange }) => {
  const todoContext = useContext(TodoContext);

  const { removeTodo } = todoContext;

  return (
    <span>
      <li className={todo.completed ? 'checked' : ''}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {todo.title}
        <button onClick={removeTodo.bind(null, todo.id)}>X</button>
      </li>
    </span>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
