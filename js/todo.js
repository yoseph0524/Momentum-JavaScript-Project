const todoForm = document.getElementById("todo-form");
const todDoInput = todoForm.querySelector("input");

const todoList = document.getElementById("todo-list");

const toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li_parent = event.target.parentElement;
    li_parent.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("botton");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todDoInput.value;
    todDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
}