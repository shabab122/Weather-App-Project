const apiKey = "0db8a6f4bb5c81d72f1d7613420c0fab";

function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    const currentWeatherUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(err => {
            console.error(err);
            alert("Error fetching current weather.");
        });

    fetch(forecastUrl)
        .then(res => res.json())
        .then(data => {

            if (Number(data.cod) !== 200) {
                return;
            }

            displayHourlyForecast(data.list);

        })
        .catch(err => {
            console.error(err);
            alert("Error fetching forecast.");
        });

    document.getElementById("city").value = "";
}

function displayWeather(data) {

    const weatherIcon = document.getElementById("weather-icon");
    const tempDiv = document.getElementById("temp-div");
    const weatherInfo = document.getElementById("weather-info");
    const hourlyForecastDiv = document.getElementById("hourly-forecast");

    tempDiv.innerHTML = "";
    weatherInfo.innerHTML = "";
    hourlyForecastDiv.innerHTML = "";

    weatherIcon.style.display = "none";
    weatherIcon.src = "";

    if (Number(data.cod) !== 200) {

        weatherInfo.innerHTML = `<p>${data.message}</p>`;
        return;
    }

    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    const iconUrl =
        `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    tempDiv.innerHTML = `<p>${temperature}°C</p>`;

    weatherInfo.innerHTML = `
        <p>${cityName}</p>
        <p>${description}</p>
    `;

    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    weatherIcon.style.display = "block";
}

function displayHourlyForecast(hourlyData) {

    const hourlyForecastDiv =
        document.getElementById("hourly-forecast");

    hourlyForecastDiv.innerHTML = "";

    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {

        const dateTime = new Date(item.dt * 1000);

        const hour = dateTime.getHours();

        const temperature = Math.round(item.main.temp);

        const iconCode = item.weather[0].icon;

        const iconUrl =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        hourlyForecastDiv.innerHTML += `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;
    });
}