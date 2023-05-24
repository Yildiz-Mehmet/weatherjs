const API_KEY = "60eb72a9fe550ec3475c6165d5c4564b";
const address =
  "http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

const getWeatherData = async (name) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
