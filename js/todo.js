const todoForm = document.getElementById("todo-form");
const todDoInput = todoForm.querySelector("input");

const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li_parent = event.target.parentElement;
    li_parent.remove();
    toDos =  toDos.filter((toDo) => toDo.id !== parseInt(li_parent.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
