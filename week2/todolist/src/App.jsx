// App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  // 새로운 할 일 추가
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  // 할 일 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 수정
  const handleEdit = (id) => {
    setIsEditing(id);
  };

  // 할 일 저장
  const handleSave = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    setIsEditing(null);
  };

  return (
    <div className="app-container">
      <h1>TODO List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="input-field"
        />
        <button onClick={handleAddTodo} className="input-button">할 일 등록</button>
      </div>
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
                <button onClick={() => handleSave(todo.id, todo.text)} className="todo-button">수정 완료</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleDelete(todo.id)} className="todo-button">삭제하기</button>
                <button onClick={() => handleEdit(todo.id)} className="todo-button">수정 진행</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
