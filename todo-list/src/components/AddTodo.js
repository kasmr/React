import React, { useState } from 'react';

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange} />
        <button type='submit'>Add to do</button>
      </form>
    </div>
  );
};

export default AddTodo;
