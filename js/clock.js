const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = (`${String(new Date().getHours()).padStart(2,"0")}:${String(new Date().getMinutes()).padStart(2,"0")}:${String(new Date().getSeconds()).padStart(2,"0")}`);
}

getClock();
setInterval(getClock, 1000);

