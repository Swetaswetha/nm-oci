const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please try again.");
                return;
            }
            
            const { name, main, weather, wind } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            const humidity = main.humidity;
            const windSpeed = wind.speed;

            document.getElementById('city-name').textContent = name;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('weather-description').textContent = `Description: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;

            weatherInfo.style.display = 'block'; // Show the weather info
        })
        .catch(err => {
            console.error('Error:', err);
            alert("An error occurred. Please try again.");
        });
}
