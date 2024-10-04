
function addElement(event){
  event.preventDefault();

  const input = document.querySelector('#task');
  const taskList=document.getElementById('taskItem');
  
  if (input.value.trim() !== "") {
      // 새로운 <li> 요소 생성
      const newTask = document.createElement('li');

      // 텍스트 부분 생성
      const taskContent = document.createElement('div');
      taskContent.classList.add('task-content');
      taskContent.textContent = input.value;

      // 완료 버튼 생성
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('my-btn');
      completeBtn.textContent = '완료';
      completeBtn.onclick = function() {
        moveToTask(newTask);
      };

      // <li>에 텍스트와 버튼 추가
      newTask.appendChild(taskContent);
      newTask.appendChild(completeBtn);

      // 목록에 <li> 추가
      taskList.appendChild(newTask);

      // 입력 필드 초기화
      input.value = "";
  }
  

}

function moveToTask(task){
  const doneList = document.getElementById('doneItem'); // 해낸 일 리스트 선택
  const completeBtn = task.querySelector('.my-btn'); // 완료 버튼 선택

  // 완료 버튼 제거
  task.removeChild(completeBtn);

  //삭제 버튼 추가
  const deleteBtn=document.createElement('button');
  deleteBtn.classList.add('my-btn')
  deleteBtn.textContent = '삭제';
  deleteBtn.onclick = function() {
    deleteElement(task);
  };

  task.appendChild(deleteBtn);

  // 해야 할 일 리스트에서 삭제
  const taskList = document.getElementById('taskItem');
  taskList.removeChild(task);

  // 해낸 일 리스트에 항목 추가
  doneList.appendChild(task);

}

function deleteElement(task){
  const doneList = document.getElementById('doneItem');
  doneList.removeChild(task);
}



// Enter key 감지 및 처리
document.getElementById('task').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addElement(event); // Enter 키를 누르면 항목 추가
  }
});