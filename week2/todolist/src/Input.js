// Input.js
import React, { useState } from 'react';
import './Input.css';

const Input = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="input-field"
      />
      <button onClick={handleAdd} className="input-button">
        할 일 등록
      </button>
    </div>
  );
};

export default Input;
