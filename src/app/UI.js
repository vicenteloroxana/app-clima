export class UI{
    //se instancia con los valores actuales
    constructor(){
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }
    //aqui cambio el contenido de cada elemento con la data del actual clima
    //1 a * whater---- ui
    render(weather){
        console.log(weather);
        this.location.textContent = weather.name + ' / ' + weather.sys.country;//obj sys: {type: 1, id: 1414, country: "GB", sunrise: 1610265772, sunset: 1610295170}
        this.desc.textContent = weather.weather[0]['description'];//o .description array [{…}] 0: {id: 721, main: "Haze", description: "haze", icon: "50n"}-- ['description'] 
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '°C';
        this.wind.textContent = 'Weather ' + weather.wind.speed + ' m/s';
    }
}