// TodoList.js
import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleSave = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    setIsEditing(null);
  };

  return (
    <div className="todo-container">
      <Input onAdd={handleAddTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {isEditing === todo.id ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onBlur={(e) => handleSave(todo.id, e.target.value)}
                  className="edit-input"
                />
                <Button text="수정 완료" onClick={() => handleSave(todo.id, todo.text)} />
              </>
            ) : (
              <>
                {todo.text}
                <Button text="삭제하기" onClick={() => handleDelete(todo.id)} />
                <Button text="수정 진행" onClick={() => handleEdit(todo.id)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
