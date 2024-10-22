import './App.css'
import Button from './components/Button';
import TodoInput from './components/TodoInput';
import { useState } from 'react'

function App() {
  const [todos,setTodos]=useState([
    {id:1,task:'투두 만들어보기'}
  ]);

  const[text,setText]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  };

  const [editingId, setEditingID]=useState('')
  const [editText, setEditText]=useState('')

  //추가하기
  const addTodo=()=>{
    if (text.trim() === '') return; // 입력이 비어있는 경우 추가하지 않음
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText(''); // 추가 후 입력창 비우기
  };

  //삭제하기
  const deleteTodo=(id)=>{
    setTodos((prev)=>
      prev.filter((item)=>item.id!=id));
  };


  //수정하기 
  const updateTodo=(id, newText)=>{
    setTodos((prev)=>
      prev.map((item)=>
        (item.id===id ? {...item, task:newText} : item)
      )
    );
    setEditingID('');
  }

  return (
    <>
      <div className='section'>
        <div className='header'>
          <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center',alignItems:'center', margin:'30px'}}>
            <TodoInput hasDefault={false} type='text' defaultValue={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={addTodo} text='등록' />
          </form>
        </div>
        
        <div className='section'>
          {todos.map(({id, task},_) =>
          <div className='list'>
            {/*수정이 아닐 때*/}
            {editingId!==id&& (
              <div key={id}>
                <p>{id}. {task}</p>
              </div>
            )} 

            {/*수정 중일 때*/}
            {editingId === id&&(
              <div key={id}>
                <p>{id}. 
                  <TodoInput hasDefault={true} type='text' onChange={(e)=>setEditText(e.target.value)} defaultValue={task}/>        
                </p>      
              </div>
            )}
            <div className='buttons'>
            <Button onClick={()=>deleteTodo(id)} text="삭제 하기" />

            {editingId === id 
            ? (<Button onClick={()=>updateTodo(editingId, editText)} text='수정 완료' />)
            : (<Button onClick={()=>{setEditingID(id); setEditText(task)}} text='수정 진행' />)}

            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
