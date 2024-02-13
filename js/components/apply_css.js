export function applyWeatherStyles(city, temp) {
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = `${Math.round(temp)}°C`;
    document.querySelector(".weather").style.display = "block";
}
export function applyForecastStyles(threeDayForecast) {
    for (let i = 0; i < 3; i++) {
        document.querySelector(`#day-${i + 1}`).innerHTML = `
            <p>Date: ${threeDayForecast[i].date}</p>
            <p>Temperature: ${threeDayForecast[i].temp}</p>
            <p>Weather: ${threeDayForecast[i].weatherMain}</p>
        `;
    }
}
