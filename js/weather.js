const API_KEY = "acc83f2e6d71a7ac0fcebdb51cfd9e86";

function onGeoOK(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.getElementById("#weather span:first-child");
            const city = document.getElementById("#weather span:last-child");
            city.innerText= data.name;
            weather.innerText = `${data.weather[0].main} and ${data.main.temp} fahrenheit degrees`;
        })
}

function onGeoError() {
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);