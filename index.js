const apiKey = "c827caa7db17c165e18a056917d9637f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const cityName = city ? city : "New York";
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        searchBox.value = "";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.scr = "./images/rain.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.scr = "./images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.scr = "./images/snow.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.scr = "./images/drizzle.png"
        }
        document.querySelector(".error").style.display = "none";
    }

    console.log(data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keypress', (e) => {
    if (e.key === "Enter"){
        checkWeather(searchBox.value);
    }
})

checkWeather();
