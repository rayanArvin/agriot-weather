export class WeatherData {
    private WeatherData: any = {};
    public weather(body) {
        body = JSON.parse(body);
        this.WeatherData.api = "agroMonitoring";
        this.WeatherData.dt = body.dt;
        this.WeatherData.weatherID = body.weather[0].id;
        this.WeatherData.weatherMain = body.weather[0].main;
        this.WeatherData.weatherDescription = body.weather[0].description;
        this.WeatherData.weatherIcon = body.weather[0].icon;
        this.WeatherData.mainTemp = body.main.temp;
        this.WeatherData.mainPressure = body.main.pressure;
        this.WeatherData.mainHumidity = body.main.humidity;
        this.WeatherData.mainTemp_min = body.main.temp_min;
        this.WeatherData.mainTemp_max = body.main.temp_max;
        this.WeatherData.windSpeed = body.wind.speed;
        this.WeatherData.windDeg = body.wind.deg;
        this.WeatherData.clouds = body.clouds.all;
        return this.WeatherData;
    }
}