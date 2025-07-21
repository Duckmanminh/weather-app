const form = document.getElementById('WeatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

const API_KEY = 'df092a29eaf61e9d943068c832f50d7c';

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        weatherResult.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <div class="results">
                <div class="weatherResult">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>Temperature: ${data.main.temp}°C</p>
                </div>
                <div class="weatherResult">
                    <i class="fa-solid fa-sun"></i>
                    <p>Feels Like: ${data.main.feels_like}°C</p>
            </div>
            <div class="results">
                <div class="weatherResult">
                    <i class="fa-solid fa-cloud"></i>
                    <p>Weather: ${data.weather[0].description}</p>
                </div>
                <div class="weatherResult">
                    <i class="fa-solid fa-wind"></i>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                </div>
                <div class="weatherResult">
                    <i class="fa-solid fa-water"></i>
                    <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
const themeToggleBtn = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

// Load saved theme
const savedTheme = localStorage.getItem('theme');

function setTheme(mode) {
  document.body.className = mode;
  localStorage.setItem('theme', mode);

  if (mode === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
  } else {
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
  }
}

// Set initial theme
if (savedTheme === 'dark') {
  setTheme('dark');
} else {
  setTheme('light'); // default
}

// Toggle on click
themeToggleBtn.addEventListener('click', () => {
  const current = document.body.className;
  const newTheme = current === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

