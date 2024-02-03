const apikey = "4c6b4f37666131ab4cfae7164c6c04ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



