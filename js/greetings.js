/*const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/styles.css" />
    <title>Document</title>
  </head>
  <body>
    <form class="hidden" id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What is your name?"
      />
      <button>Log In</button>
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <h2 id="clock">00</h2>

    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
  </body>
</html>*/

const button = document.querySelector("button");
const chosen = document.querySelector("#chose");
const result = document.querySelector("#won");
const random = document.querySelector("#h2 input");
const mine = document.querySelector("#h4 input");

function pressedPlay(event) {
    event.preventDefault();
    const rand_num = Math.round(Math.random() * random.value);
    const my_num = mine.value;
    chosen.innerText = "You chose: " + my_num + ", the machine chose: " + rand_num + ".";
    if (my_num != rand_num) {
        result.innerText = "You lost!";
      } else {
        result.innerText = "You won!";
      }
}

button.addEventListener("click", pressedPlay);
