import {apiUrl, apiKey} from '../utils/config.js';
import {applyWeatherStyles} from './apply_css.js';
import {showError} from '../utils/error_handling.js';
import {hideError} from '../utils/error_handling.js';
export async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 200) {
            const data = await response.json();
            applyWeatherStyles(data.name, data.main.temp);
            hideError();
        } else if(response.status == 404) {
            showError();
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}