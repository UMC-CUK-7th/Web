import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  //todolist, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "화면 1 2 3 4" },
  ]);

  //input에 있는 value는 따로 상태를 만들어 줘야 함
  //todolist에 있는 할 일들과 input에 넣는 할 일이 같으면 안됨
  //input에 문자열 들어가기 때문에, '' 빈 문자열 입력 -> 밑 input 태그 value 값에 text 입력
  const [text, setText] = useState("");

  //수정 중일 때는 input 창 뜨기, 수정 아닐 때는 input 창 없음
  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState(false);

  // ============================
  //1. 추가하기
  //2. 삭제하기
  //3. 수정하기 (핵심)
  // ============================

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //1. 추가하기.
  //button 태그 -> 버튼을 클릭할 때마다 addTodo를 호출
  //이전 값을 기억해야함
  const addTodo = () => {
    //prev : 이전 값
    //배열로 시작했기 때문에 배열로 ...(스프레드 연산자) 이전 값 복사, 연결
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  //2.삭제하기
  //삭제하기 버튼을 눌렀을 때, 해당 할 일의 Id를 받아와야 함
  //deleteTodo의 id는 삭제하기 버튼을 누른 항목의 id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //3.수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input" //className 추가
        ></Input>
        <Button onClick={addTodo} type="submit" className="button">
          할 일 등록
        </Button>
      </form>
      <div>
        {todos.map((todo) => (
          //동일한 위치의 연속된 태그 사용 불가
          <div key={todo.id}>
            {/*수정이 아닐때*/}
            {editingId !== todo.id && (
              <div key={todo.id} className="todo-item">
                <p>{todo.id}</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/*수정 중 상태*/}
            {editingId === todo.id && (
              <div key={todo.id} className="todo-item">
                <p>{todo.id}.</p>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                  className="input"
                ></Input>
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)} className="button">
              삭제
            </Button>

            {/* editingId !== todo.id 수정이 아닌 상태*/}
            {/* editingId === todo.id 수정 중인 상태*/}
            {editingId === todo.id ? (
              <Button
                onClick={() => updateTodo(editingId, editText)}
                className="button"
              >
                수정 완료
              </Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)} className="button">
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
