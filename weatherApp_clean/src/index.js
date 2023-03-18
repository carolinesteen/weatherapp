let weather = {
  paris: {
    temp: Math.round(19.7),
    humidity: 80,
  },
  tokyo: {
    temp: Math.round(17.3),
    humidity: 50,
  },
  lisbon: {
    temp: Math.round(30.2),
    humidity: 20,
  },
  "san francisco": {
    temp: Math.round(20.9),
    humidity: 100,
  },
  oslo: {
    temp: Math.round(-5),
    humidity: 20,
  },
};

/////// Make date /////////

let now = new Date();

function formatDate(date) {
  let currentDate = document.querySelector("#currentDate");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  currentDate.innerHTML = `${day}, ${hour}:${minute}`;
}
console.log(formatDate(now));

// other search engine
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// converter
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
