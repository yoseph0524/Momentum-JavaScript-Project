const clock1 = document.querySelector("h2#clock1");
const clock2 = document.querySelector("h2#clock2");

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getClock() {
    const date = new Date();
    clock1.innerText = (`${String(new Date().getHours()).padStart(2,"0")}:${String(new Date().getMinutes()).padStart(2,"0")}:${String(new Date().getSeconds()).padStart(2,"0")}`);
    clock2.innerText = (`${day[new Date().getDay()]}, ${month[new Date().getMonth()]} ${String(new Date().getDate()).padStart(2,"0")}`);
}

getClock();
setInterval(getClock, 1000);

