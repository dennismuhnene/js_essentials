function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    const apiKey = '0d3d9a47ae30b2fea1f912a6e1aa3cc5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        displayError();
      });
  }
  
function showWeatherReport(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('long').value;
    const apiKey = '0d3d9a47ae30b2fea1f912a6e1aa3cc5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        displayError();
      });
  }
  
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (data && data.name && data.main && data.weather) {
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
        displayError();
    }
  }
  
  function displayError() {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
  document.getElementById('weatherForm2').addEventListener('submit', showWeatherReport);
  