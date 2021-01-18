const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// 버튼 누르면 삭제
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTODos();
}
// LocalStorage 에 JSON 타입으로 저장
function saveTODos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON -> String 타입으로 변경
}

// HTML 에 li, span, Btn 삽입
function paintToDo(text) {
    const li = document.createElement("li"); // li 생성
    const delBtn = document.createElement("button"); // 버튼 생성
    delBtn.innerHTML = "🤧"; // 버튼에 이모티콘 삽입
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span); // li 에 span, delBtn 등을 집어넣는다.
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li); 
    // OBJ 생성
    const toDoObj = {
        text: text,
        id: newId
    };
    // toDos 에 OBJ 삽입
    toDos.push(toDoObj);
    saveTODos();
}

// input 태그에 엔터쳤을때 실행
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

// 새로고침 시 불러오기
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        console.log(loadedToDos);
            if(loadedToDos !== null) {
                const parsedToDos = JSON.parse(loadedToDos); // JSON 파싱
                console.log(parsedToDos);
                parsedToDos.forEach(function(toDo) {
                    paintToDo(toDo.text);
                });// parsedToDos 의 Object 들을 한번씩 실행한다.
            }
    }
}

// 시작
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); // toDoForm Submit(엔터) 하면 handleSubmit 실행
}

init();