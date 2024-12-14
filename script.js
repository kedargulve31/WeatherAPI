var actionBtn = document.querySelector(".input-filed button");
var inputfiled = document.querySelector("#inpt");
var overlay = document.querySelector(".overlay");
var desc = document.querySelector("#desc");
var temp = document.querySelector("#temp");
var city = document.querySelector("#city");
var windspeed = document.querySelector("#windspeed");
var humidity = document.querySelector("#humidity");

actionBtn.addEventListener('click', () => {
    if (inputfiled.value === '') {
        alert('Enter City Name');
        return;
    }

    overlay.style.display = 'flex';

    setTimeout(async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputfiled.value}&APPID=039a6f61650c056da84638a1f26165e4&units=metric`;
        let res = await fetch(url);

        if (res.status === 200) {
            let data = await res.json();

            desc.innerHTML = `Description: ${data.weather[0].description}`;
            temp.innerHTML = `Temp: ${data.main.temp}°C`;
            city.innerHTML = `City: ${data.name}`;
            windspeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        } else if (res.status === 404) {
            alert('City not found!');
        } 

        overlay.style.display = 'none';
    }, 2000); 
});
