require('./index.css');
const { Store } = require('./store');
const { Weather } = require('./Weather');
const { UI } = require('./UI');

//index clase controladora de las demas clases 
const store=new Store();
//obtengo la city y country code por defecto al iniciar la app
const {city, countryCode}= storage.getLocationData();
const ui = new UI();
//console.log('objeto',ui);
//al iniciar la app sera con valores por defecto 
const weather=new Weather(city, countryCode);
//console.log(weather);

document.addEventListener('DOMContentLoaded',fetchWeather);

async function fetchWeather(){
    const data=await weather.getWeather();
    //console.log(data);
    ui.render(data);
    //console.log('ui ',ui.render(data));
    
}
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    //console.log(city,countryCode); a mi mismo obj o instancia le cambio las propiedades
    weather.changeLocation(city,countryCode);
    store.setLocationData(city,countryCode);
    e.preventDefault();
    // weather.changeLocation(city, countryCode);
    // storage.setLocationData(city, countryCode);
    fetchWeather();  
});
