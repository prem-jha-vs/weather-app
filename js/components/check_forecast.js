import {forecastApiUrl, apiKey} from '../utils/config.js';
import {applyForecastStyles} from './apply_css.js';
import {showError} from '../utils/error_handling.js';
import {hideError} from '../utils/error_handling.js';

export async function checkForecast(city) {
    try {
        const forecastResponse = await fetch(forecastApiUrl + city + `&appid=${apiKey}`);

        if (forecastResponse.status == 200) {
            const forecastData = await forecastResponse.json();
            const threeDayForecast = extractThreeDayForecast(forecastData.list);
            applyForecastStyles(threeDayForecast);
            hideError();
        } else if(forecastResponse.status == 404) {
            showError();
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}
export function extractThreeDayForecast(forecastList) {
    const threeDayForecast = [];
    for (let i = 7; i < forecastList.length && threeDayForecast.length < 3; i += 8) {
        const forecastDate = new Date(forecastList[i].dt * 1000);
        const forecastTemp = Math.round(forecastList[i].main.temp);
        const weatherMain = (forecastList[i].weather[0].main);
        const forecastItem = {
            date: forecastDate.toLocaleDateString("en-US", { year: "numeric",
            month: "short",
            day: "numeric",}),
            temp: `${forecastTemp}°C`,
            weatherMain: `${weatherMain}°C`,
        };
        threeDayForecast.push(forecastItem);
    }
    return threeDayForecast;
}