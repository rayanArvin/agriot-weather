"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const weatherPersonal_1 = require("../personal/weatherPersonal");
class WeatherForAPolygon {
    constructor() {
        this.urlAPI = main_1.main.agro_url + "weather";
        this.options = {
            body: {},
            url: this.urlAPI,
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    getCurrentWeather(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '?polyid=' + polyid + '&appid=' + main_1.main.appid,
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            request.get(options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const weatherData = new weatherPersonal_1.WeatherPersonal().CurrentWeather(body, polyid);
                        resolve(weatherData);
                    }
                    else
                        reject(response);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    ;
    getForecastWeather(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/forecast?polyid=' + polyid + '&appid=' + main_1.main.appid,
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            request.get(options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const weatherDataS = new weatherPersonal_1.WeatherPersonal().ForecastWeather(body, polyid);
                        resolve(weatherDataS);
                    }
                    else
                        reject(response);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    ;
    getHistoryWeather(polyid, start, end) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/history?' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error, response, body) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    ;
}
exports.WeatherForAPolygon = WeatherForAPolygon;
//# sourceMappingURL=WeatherForAPolygon.js.map