export class WeatherData {
    private WeatherData: any = {};
    public CurrentWeather(body) {
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

    public ForecastWeather(body){
        body = JSON.parse(body);
        // console.log(body);
        // return body;
        let temp = [];
        for (let value of body) {
            this.WeatherData.api = "agromonitoring";
            this.WeatherData.dt = value.dt;
            this.WeatherData.weatherID = value.weather[0].id;
            this.WeatherData.weatherMain = value.weather[0].main;
            this.WeatherData.weatherDescription = value.weather[0].description;
            this.WeatherData.weatherIcon = value.weather[0].icon;
            this.WeatherData.mainTemp = value.main.temp;
            this.WeatherData.mainPressure = value.main.pressure;
            this.WeatherData.mainHumidity = value.main.humidity;
            this.WeatherData.mainTemp_min = value.main.temp_min;
            this.WeatherData.mainTemp_max = value.main.temp_max;
            this.WeatherData.mainSea_level = value.main.sea_level;
            this.WeatherData.mainGrnd_level = value.main.grnd_level;
            this.WeatherData.mainTemp_kf = value.main.temp_kf;
            this.WeatherData.windSpeed = value.wind.speed;
            this.WeatherData.windDeg = value.wind.deg;
            temp.push(this.WeatherData);
        }
        return temp;
    }
}

// const w = new WeatherData();
let body:any = [
    {
        "dt": 1558882800,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 286.19,
            "temp_min": 286.19,
            "temp_max": 286.2,
            "pressure": 1007.27,
            "sea_level": 1007.27,
            "grnd_level": 1007.25,
            "humidity": 62,
            "temp_kf": -0.01
        },
        "wind": {
            "speed": 7.9,
            "deg": 250.489
        },
        "clouds": {
            "all": 9
        }
    },
    {
        "dt": 1558893600,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "main": {
            "temp": 288.89,
            "temp_min": 288.89,
            "temp_max": 288.9,
            "pressure": 1009.25,
            "sea_level": 1009.25,
            "grnd_level": 1008.9,
            "humidity": 52,
            "temp_kf": -0.01
        },
        "wind": {
            "speed": 5.93,
            "deg": 256.528
        },
        "rain": {
            "3h": 0.562
        },
        "clouds": {
            "all": 13
        }
    },
    {
        "dt": 1558904400,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "main": {
            "temp": 290.67,
            "temp_min": 290.67,
            "temp_max": 290.677,
            "pressure": 1009.92,
            "sea_level": 1009.92,
            "grnd_level": 1009.56,
            "humidity": 50,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.44,
            "deg": 256.65
        },
        "rain": {
            "3h": 1.812
        },
        "clouds": {
            "all": 18
        }
    },
    {
        "dt": 1558915200,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "main": {
            "temp": 291.04,
            "temp_min": 291.04,
            "temp_max": 291.044,
            "pressure": 1011.04,
            "sea_level": 1011.04,
            "grnd_level": 1010.63,
            "humidity": 50,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.86,
            "deg": 235.58
        },
        "rain": {
            "3h": 1.126
        },
        "clouds": {
            "all": 13
        }
    },
    {
        "dt": 1558926000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 287.6,
            "temp_min": 287.6,
            "temp_max": 287.6,
            "pressure": 1012.2,
            "sea_level": 1012.2,
            "grnd_level": 1011.82,
            "humidity": 64,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.34,
            "deg": 232.388
        },
        "clouds": {
            "all": 9
        }
    },
    {
        "dt": 1558936800,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 286.451,
            "temp_min": 286.451,
            "temp_max": 286.451,
            "pressure": 1014.09,
            "sea_level": 1014.09,
            "grnd_level": 1013.34,
            "humidity": 68,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.43,
            "deg": 233.878
        },
        "clouds": {
            "all": 27
        }
    },
    {
        "dt": 1558947600,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "main": {
            "temp": 285.2,
            "temp_min": 285.2,
            "temp_max": 285.2,
            "pressure": 1014.42,
            "sea_level": 1014.42,
            "grnd_level": 1013.94,
            "humidity": 73,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.47,
            "deg": 222.702
        },
        "clouds": {
            "all": 55
        }
    },
    {
        "dt": 1558958400,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 283.6,
            "temp_min": 283.6,
            "temp_max": 283.6,
            "pressure": 1015.25,
            "sea_level": 1015.25,
            "grnd_level": 1014.9,
            "humidity": 81,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.11,
            "deg": 184.248
        },
        "clouds": {
            "all": 48
        }
    },
    {
        "dt": 1558969200,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 287.2,
            "temp_min": 287.2,
            "temp_max": 287.2,
            "pressure": 1016.19,
            "sea_level": 1016.19,
            "grnd_level": 1016.41,
            "humidity": 68,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.14,
            "deg": 226.967
        },
        "clouds": {
            "all": 2
        }
    },
    {
        "dt": 1558980000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 292.263,
            "temp_min": 292.263,
            "temp_max": 292.263,
            "pressure": 1016.71,
            "sea_level": 1016.71,
            "grnd_level": 1016.96,
            "humidity": 51,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.26,
            "deg": 236.219
        },
        "clouds": {
            "all": 3
        }
    },
    {
        "dt": 1558990800,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "main": {
            "temp": 295.337,
            "temp_min": 295.337,
            "temp_max": 295.337,
            "pressure": 1017.22,
            "sea_level": 1017.22,
            "grnd_level": 1016.9,
            "humidity": 44,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.07,
            "deg": 264.88
        },
        "clouds": {
            "all": 12
        }
    },
    {
        "dt": 1559001600,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 294.956,
            "temp_min": 294.956,
            "temp_max": 294.956,
            "pressure": 1016.58,
            "sea_level": 1016.58,
            "grnd_level": 1016.28,
            "humidity": 47,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.86,
            "deg": 251.096
        },
        "clouds": {
            "all": 34
        }
    },
    {
        "dt": 1559012400,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 290.913,
            "temp_min": 290.913,
            "temp_max": 290.913,
            "pressure": 1016.37,
            "sea_level": 1016.37,
            "grnd_level": 1016.14,
            "humidity": 62,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.4,
            "deg": 258.627
        },
        "clouds": {
            "all": 8
        }
    },
    {
        "dt": 1559023200,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 286.813,
            "temp_min": 286.813,
            "temp_max": 286.813,
            "pressure": 1017.51,
            "sea_level": 1017.51,
            "grnd_level": 1017.09,
            "humidity": 76,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.33,
            "deg": 257.275
        },
        "clouds": {
            "all": 8
        }
    },
    {
        "dt": 1559034000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 285.4,
            "temp_min": 285.4,
            "temp_max": 285.4,
            "pressure": 1017.01,
            "sea_level": 1017.01,
            "grnd_level": 1016.71,
            "humidity": 83,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.57,
            "deg": 269.532
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559044800,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 284.53,
            "temp_min": 284.53,
            "temp_max": 284.53,
            "pressure": 1016.25,
            "sea_level": 1016.25,
            "grnd_level": 1016.46,
            "humidity": 88,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.29,
            "deg": 266.66
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559055600,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 288.548,
            "temp_min": 288.548,
            "temp_max": 288.548,
            "pressure": 1015.88,
            "sea_level": 1015.88,
            "grnd_level": 1016.49,
            "humidity": 72,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.1,
            "deg": 278.736
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559066400,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 295.43,
            "temp_min": 295.43,
            "temp_max": 295.43,
            "pressure": 1014.49,
            "sea_level": 1014.49,
            "grnd_level": 1015.04,
            "humidity": 53,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.68,
            "deg": 324.102
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559077200,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 301.33,
            "temp_min": 301.33,
            "temp_max": 301.33,
            "pressure": 1012.54,
            "sea_level": 1012.54,
            "grnd_level": 1012.15,
            "humidity": 34,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.71,
            "deg": 322.43
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559088000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 302.456,
            "temp_min": 302.456,
            "temp_max": 302.456,
            "pressure": 1010.87,
            "sea_level": 1010.87,
            "grnd_level": 1010.03,
            "humidity": 29,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.82,
            "deg": 287.363
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559098800,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 295.222,
            "temp_min": 295.222,
            "temp_max": 295.222,
            "pressure": 1011.32,
            "sea_level": 1011.32,
            "grnd_level": 1010.53,
            "humidity": 59,
            "temp_kf": 0
        },
        "wind": {
            "speed": 5.13,
            "deg": 245.941
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559109600,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 291.83,
            "temp_min": 291.83,
            "temp_max": 291.83,
            "pressure": 1012.1,
            "sea_level": 1012.1,
            "grnd_level": 1010.82,
            "humidity": 60,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.71,
            "deg": 244.767
        },
        "clouds": {
            "all": 39
        }
    },
    {
        "dt": 1559120400,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "main": {
            "temp": 290.037,
            "temp_min": 290.037,
            "temp_max": 290.037,
            "pressure": 1011.03,
            "sea_level": 1011.03,
            "grnd_level": 1010.26,
            "humidity": 63,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.81,
            "deg": 244.806
        },
        "clouds": {
            "all": 100
        }
    },
    {
        "dt": 1559131200,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "main": {
            "temp": 289.446,
            "temp_min": 289.446,
            "temp_max": 289.446,
            "pressure": 1010.65,
            "sea_level": 1010.65,
            "grnd_level": 1010.42,
            "humidity": 64,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.41,
            "deg": 248.697
        },
        "clouds": {
            "all": 100
        }
    },
    {
        "dt": 1559142000,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "main": {
            "temp": 291.6,
            "temp_min": 291.6,
            "temp_max": 291.6,
            "pressure": 1010.72,
            "sea_level": 1010.72,
            "grnd_level": 1011.13,
            "humidity": 60,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.56,
            "deg": 287.308
        },
        "clouds": {
            "all": 100
        }
    },
    {
        "dt": 1559152800,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "main": {
            "temp": 299.321,
            "temp_min": 299.321,
            "temp_max": 299.321,
            "pressure": 1010.49,
            "sea_level": 1010.49,
            "grnd_level": 1010.95,
            "humidity": 43,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.27,
            "deg": 279.031
        },
        "clouds": {
            "all": 93
        }
    },
    {
        "dt": 1559163600,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "main": {
            "temp": 303.089,
            "temp_min": 303.089,
            "temp_max": 303.089,
            "pressure": 1009.06,
            "sea_level": 1009.06,
            "grnd_level": 1008.63,
            "humidity": 34,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.21,
            "deg": 266.787
        },
        "clouds": {
            "all": 53
        }
    },
    {
        "dt": 1559174400,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 303.209,
            "temp_min": 303.209,
            "temp_max": 303.209,
            "pressure": 1008.43,
            "sea_level": 1008.43,
            "grnd_level": 1007.48,
            "humidity": 34,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.26,
            "deg": 264.066
        },
        "clouds": {
            "all": 26
        }
    },
    {
        "dt": 1559185200,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 296.045,
            "temp_min": 296.045,
            "temp_max": 296.045,
            "pressure": 1009.34,
            "sea_level": 1009.34,
            "grnd_level": 1008.24,
            "humidity": 52,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.57,
            "deg": 246.647
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559196000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 292.022,
            "temp_min": 292.022,
            "temp_max": 292.022,
            "pressure": 1010.68,
            "sea_level": 1010.68,
            "grnd_level": 1009.29,
            "humidity": 56,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.06,
            "deg": 251.315
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559206800,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 289.2,
            "temp_min": 289.2,
            "temp_max": 289.2,
            "pressure": 1010.37,
            "sea_level": 1010.37,
            "grnd_level": 1009.58,
            "humidity": 66,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.12,
            "deg": 267.186
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559217600,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 287.59,
            "temp_min": 287.59,
            "temp_max": 287.59,
            "pressure": 1010.48,
            "sea_level": 1010.48,
            "grnd_level": 1010.12,
            "humidity": 73,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.3,
            "deg": 273.34
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559228400,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 290.851,
            "temp_min": 290.851,
            "temp_max": 290.851,
            "pressure": 1011.34,
            "sea_level": 1011.34,
            "grnd_level": 1011.54,
            "humidity": 63,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.02,
            "deg": 283.114
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559239200,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 298.3,
            "temp_min": 298.3,
            "temp_max": 298.3,
            "pressure": 1011.16,
            "sea_level": 1011.16,
            "grnd_level": 1011.42,
            "humidity": 41,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.44,
            "deg": 274.462
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559250000,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "main": {
            "temp": 303.152,
            "temp_min": 303.152,
            "temp_max": 303.152,
            "pressure": 1010.16,
            "sea_level": 1010.16,
            "grnd_level": 1009.77,
            "humidity": 32,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.65,
            "deg": 274.963
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559260800,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 303.261,
            "temp_min": 303.261,
            "temp_max": 303.261,
            "pressure": 1009.55,
            "sea_level": 1009.55,
            "grnd_level": 1008.86,
            "humidity": 32,
            "temp_kf": 0
        },
        "wind": {
            "speed": 4.2,
            "deg": 272.305
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559271600,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 296.336,
            "temp_min": 296.336,
            "temp_max": 296.336,
            "pressure": 1010.14,
            "sea_level": 1010.14,
            "grnd_level": 1009.43,
            "humidity": 46,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.82,
            "deg": 253.317
        },
        "clouds": {
            "all": 0
        }
    },
    {
        "dt": 1559282400,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "main": {
            "temp": 292.393,
            "temp_min": 292.393,
            "temp_max": 292.393,
            "pressure": 1011.33,
            "sea_level": 1011.33,
            "grnd_level": 1010.41,
            "humidity": 54,
            "temp_kf": 0
        },
        "wind": {
            "speed": 3.82,
            "deg": 250.702
        },
        "clouds": {
            "all": 16
        }
    },
    {
        "dt": 1559293200,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "main": {
            "temp": 289.845,
            "temp_min": 289.845,
            "temp_max": 289.845,
            "pressure": 1010.9,
            "sea_level": 1010.9,
            "grnd_level": 1010.31,
            "humidity": 63,
            "temp_kf": 0
        },
        "wind": {
            "speed": 1.74,
            "deg": 268.649
        },
        "clouds": {
            "all": 11
        }
    },
    {
        "dt": 1559304000,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "main": {
            "temp": 288.546,
            "temp_min": 288.546,
            "temp_max": 288.546,
            "pressure": 1011.12,
            "sea_level": 1011.12,
            "grnd_level": 1010.89,
            "humidity": 69,
            "temp_kf": 0
        },
        "wind": {
            "speed": 2.14,
            "deg": 267.773
        },
        "clouds": {
            "all": 29
        }
    }
];
// w.ForecastWeather(body);