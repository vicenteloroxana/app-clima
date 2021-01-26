export class Weather{
    constructor(city,countryCode){
        this.apiKey='2c4d081827f399e944a555c35e71a4ee';
        this.city=city;
        this.countryCode=countryCode;
    }
    //obtener el clima de x pais ciudad 
    async getWeather(){
        const uri=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response=await fetch(uri);
        const data=await response.json();
        return data;
    }
    //set establcer nuevas ciudades
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}