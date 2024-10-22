import { useState } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: text } : todo)));
    setEditingId(null);
  };

  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editingId !== todo.id ? (
            <>
              <p className="todo-id">{todo.id}</p>
              <p className="todo-task">{todo.task}</p>
            </>
          ) : (
            <>
              <p className="todo-id">{todo.id}.</p>
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </>
          )}
          <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
          {editingId === todo.id ? (
            <Button onClick={() => updateTodo(editingId, editText)}>수정완료</Button>
          ) : (
            <Button onClick={() => setEditingId(todo.id)}>수정 진행</Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;







