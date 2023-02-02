const API_KEY = 'c';
const zipCode = localStorage.zip;

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    // update the temperature in the HTML
    document.getElementById("weather-txt").innerHTML = `${Math.round(data.main.temp - 233)}° - ${data.name}, ${data.sys.country}`;
    
    // update the weather icon based on the weather conditions
    switch (data.weather[0].main) {
      case "Clear":
        document.getElementById("weather-icon").src = "./assets/weatherIcons/sunny.png";
        break;
      case "Clouds":
        document.getElementById("weather-icon").src = "./assets/weatherIcons/cloud.png";
        break;
      case "Rain":
        document.getElementById("weather-icon").src = "./assets/weatherIcons/rain.png";
        break;
      case "Snow":
        document.getElementById("weather-icon").src = "./assets/weatherIcons/snow.png";
        break;
      case "Thunderstorm":
        document.getElementById("weather-icon").src = "./assets/weatherIcons/thunderstorm.png";
        break;
      default:
        document.getElementById("weather-icon").src = "./assets/weatherIcons/cloud.png";
    }
  })
  .catch(error => {
    console.error(error);
  });
