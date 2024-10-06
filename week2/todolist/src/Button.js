// Button.js
import React from 'react';
import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="todo-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
