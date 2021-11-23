const API_KEY = "c489a35d426ada8371a09efbbdea056f";

function onGeoOk(location) {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name;
    })
}

function onGeoError() {
    alert("Can't find you, No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);