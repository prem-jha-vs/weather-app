import { checkForecast } from './components/check_forecast.js';
import { checkWeather } from './components/check_weather.js';


const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    if (city) {
        Promise.all([checkWeather(city), checkForecast(city)])
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    } else {
        alert("Please enter a city name");
    }
});