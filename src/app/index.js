const { Store } = require('./Store');
const { Weather } = require('./Weather');
const { UI } = require('./UI');

//index clase controladora de las demas clases 
const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const weather = new Weather(city, countryCode);
//obtengo la city y country code por defecto al iniciar la app

//al iniciar la app sera con valores por defecto 

const ui = new UI();
//console.log('objeto',ui);
//console.log(weather);
require('./index.css');
document.addEventListener('DOMContentLoaded',fetchWeather);

async function fetchWeather() {
    const data = await weather.getWeather()
    ui.render(data);
}
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    fetchWeather();
  
});
  
document.addEventListener('DOMContentLoaded', fetchWeather);
