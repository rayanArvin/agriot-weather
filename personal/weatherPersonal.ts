export class WeatherPersonal {
    private WeatherPersonal: any = {};
    public CurrentWeather(body) {
        body = JSON.parse(body);
        this.WeatherPersonal.api = "agroMonitoring";
        this.WeatherPersonal.dt = body.dt;
        this.WeatherPersonal.weatherID = body.weather[0].id;
        this.WeatherPersonal.weatherMain = body.weather[0].main;
        this.WeatherPersonal.weatherDescription = body.weather[0].description;
        this.WeatherPersonal.weatherIcon = body.weather[0].icon;
        this.WeatherPersonal.mainTemp = + Math.round(body.main.temp - 273);
        this.WeatherPersonal.mainPressure = body.main.pressure;
        this.WeatherPersonal.mainHumidity = body.main.humidity;
        this.WeatherPersonal.mainTemp_min = + Math.round(body.main.temp_min - 273);
        this.WeatherPersonal.mainTemp_max = + Math.round(body.main.temp_max - 273);
        this.WeatherPersonal.windSpeed = body.wind.speed;
        this.WeatherPersonal.windDeg = body.wind.deg;
        this.WeatherPersonal.clouds = body.clouds.all;
        return this.WeatherPersonal;
    };

    public ForecastWeather(body){
        body = JSON.parse(body);
        // console.log(body);
        // return body;
        let temp = [];
        for (let value of body) {
            this.WeatherPersonal.api = "agromonitoring";
            this.WeatherPersonal.dt = value.dt;
            this.WeatherPersonal.weatherID = value.weather[0].id;
            this.WeatherPersonal.weatherMain = value.weather[0].main;
            this.WeatherPersonal.weatherDescription = value.weather[0].description;
            this.WeatherPersonal.weatherIcon = value.weather[0].icon;
            this.WeatherPersonal.mainTemp = Math.round(+ value.main.temp -273);
            this.WeatherPersonal.mainPressure = value.main.pressure;
            this.WeatherPersonal.mainHumidity = value.main.humidity;
            this.WeatherPersonal.mainTemp_min = + Math.round(value.main.temp_min - 273);
            this.WeatherPersonal.mainTemp_max = + Math.round(value.main.temp_max- 273);
            this.WeatherPersonal.mainSea_level = value.main.sea_level;
            this.WeatherPersonal.mainGrnd_level = value.main.grnd_level;
            this.WeatherPersonal.mainTemp_kf = + Math.round(value.main.temp_kf - 273);
            this.WeatherPersonal.windSpeed = value.wind.speed;
            this.WeatherPersonal.windDeg = value.wind.deg;
            temp.push(this.WeatherPersonal);
        }
        return temp;
    };
}