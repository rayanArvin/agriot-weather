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
        this.WeatherPersonal.mainTemp = body.main.temp;
        this.WeatherPersonal.mainPressure = body.main.pressure;
        this.WeatherPersonal.mainHumidity = body.main.humidity;
        this.WeatherPersonal.mainTemp_min = body.main.temp_min;
        this.WeatherPersonal.mainTemp_max = body.main.temp_max;
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
            this.WeatherPersonal.mainTemp = value.main.temp;
            this.WeatherPersonal.mainPressure = value.main.pressure;
            this.WeatherPersonal.mainHumidity = value.main.humidity;
            this.WeatherPersonal.mainTemp_min = value.main.temp_min;
            this.WeatherPersonal.mainTemp_max = value.main.temp_max;
            this.WeatherPersonal.mainSea_level = value.main.sea_level;
            this.WeatherPersonal.mainGrnd_level = value.main.grnd_level;
            this.WeatherPersonal.mainTemp_kf = value.main.temp_kf;
            this.WeatherPersonal.windSpeed = value.wind.speed;
            this.WeatherPersonal.windDeg = value.wind.deg;
            temp.push(this.WeatherPersonal);
        }
        return temp;
    };
}