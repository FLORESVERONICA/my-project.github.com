const apiKey = '311385013964440fb8b214146242407';
const city = 'Sevilla';

async function fetchWeather() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);
    const data = await response.json();
    displayCurrentWeather(data);
    displayHourlyForecast(data);
}

function displayCurrentWeather(data) {
    const current = data.current;
    document.getElementById('current-icon').src = `https:${current.condition.icon}`;
    document.getElementById('current-temp').textContent = `Temperatura: ${current.temp_c}°C`;
    document.getElementById('current-condition').textContent = `Condición: ${current.condition.text}`;
    document.getElementById('current-precip').textContent = `Precipitaciones: ${current.precip_mm} mm`;
    document.getElementById('current-humidity').textContent = `Humedad: ${current.humidity}%`;
    document.getElementById('current-wind').textContent = `Viento: ${current.wind_kph} km/h`;
}

function displayHourlyForecast(data) {
    const forecast = data.forecast.forecastday[0].hour;
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';
    forecast.forEach(hour => {
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('forecast-hour');
        hourDiv.innerHTML = `
            <p>${hour.time.split(' ')[1]}</p>
            <img src="https:${hour.condition.icon}" alt="Icono del clima">
            <p>${hour.temp_c}°C</p>
        `;
        forecastContainer.appendChild(hourDiv);
    });
}

fetchWeather();
const imagen = ["https://plus.unsplash.com/premium_photo-1675011288741-f86047b7ef29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1721946441813-b39c511e8f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1722072977408-0865d9cc3904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1722082839833-04f0094ea4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721978701302-6b8167d55752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1661963329070-f01dac0e2dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1720760890793-66c84ea9a418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721566364814-7345a56e7ab0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721002335874-16ca86e39cd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721540890959-81bfee4c62f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D"];
function ImagenBackground() {
    const randomImagen = Math.floor(Math.random() * imagen.length);
    const imagenURL = `url(${imagen[randomImagen]})`;
    document.body.style.backgroundImage = imagenURL;
    console.log(imagenURL);
}
setInterval(ImagenBackground,10000);