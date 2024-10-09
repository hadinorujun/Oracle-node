const axios = require('axios');

// Fungsi untuk mengambil data cuaca
async function getCurrentWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

module.exports = { getCurrentWeather };