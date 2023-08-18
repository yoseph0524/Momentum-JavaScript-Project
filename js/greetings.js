const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LOGIN_CSS = "login-css"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(LOGIN_CSS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
}

function onClick(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    event.preventDefault();
    const username = loginInput.value;
    localStorage.removeItem("toDos");
    localStorage.removeItem(USERNAME_KEY, username);
    logOut.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(LOGIN_CSS);
    location.reload();
}

logOut.addEventListener("click", onClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



