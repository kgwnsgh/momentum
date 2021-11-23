const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input")
const body = document.body;

const TODOS_KEY = "todos"

let ToDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function handleCheckBox(event) {
    const span = event.target.parentElement.querySelector("span");
    span.classList.toggle("surrec");
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("btnView");
    button.addEventListener("click", deleteToDo)
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", handleCheckBox);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoOj = {
        text: newToDo,
        id: Date.now(),
    }
    ToDos.push(newToDoOj);
    paintToDo(newToDoOj);
    saveToDo()
}

function handleToDoInputClick() {
    toDoInput.placeholder = "";
    toDoInput.style.borderBottom = "2px white solid"
    toDoInput.style.color = "white"
}

toDoForm.addEventListener("submit", handleToDoSubmit)
toDoInput.addEventListener("click", handleToDoInputClick)

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parseToDos = JSON.parse(saveToDos);
    newToDo = parseToDos;
    //parseToDos.forEach((item) => console.log("this is turn of ", item));
    parseToDos.forEach(paintToDo);
}
