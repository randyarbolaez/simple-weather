console.log('ged');

function kelvinToFahrenheit(k) {
  return Math.floor(((k - 273.15) * 9) / 5 + 32);
}

console.log(kelvinToFahrenheit(296.62));

function getData(zipCode) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=02f14fd4315a74a0c53aa1f7fcea68fa`
  )
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      let cityName = document.getElementById('city');
      let weatherDescription = document.getElementById('weather-description');
      let mainTemperature = document.getElementById('main-temperature');
      let minTemperature = document.getElementById('min-temperature');
      let maxTemperature = document.getElementById('max-temperature');
      let humidity = document.getElementById('humidity');
      cityName.innerHTML = res.name;
      weatherDescription.innerHTML = res.weather[0].description;
      mainTemperature.innerHTML = `${kelvinToFahrenheit(res.main.temp)}°`;
      minTemperature.innerHTML = `MIN:${kelvinToFahrenheit(
        res.main.temp_min
      )}°`;
      maxTemperature.innerHTML = `MAX:${kelvinToFahrenheit(
        res.main.temp_max
      )}°`;
      humidity.innerHTML = `HUMIDITY:${res.main.humidity}°`;
    });
}

function submitZipCode(e) {
  e.preventDefault();
  let zipCodeNumber = document.getElementById('input-zip-code').value;
  getData(zipCodeNumber);
}
