const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
function filterFn(toDo) {
    return toDo.id === 1
}
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
function saveTODos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON -> String 타입으로 변경
}
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
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

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
function init() {
    loadToDos();

    toDoForm.addEventListener("submit", handleSubmit); // toDoForm Submit(엔터) 하면 handleSubmit 실행
}

init();