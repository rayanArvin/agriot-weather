"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
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
                    'User-Agent': 'request',
                }
            };
            request.get(options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
    ;
    getForecastWeather(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                headers: {
                    url: this.urlAPI + '/forecast?polyid=' + polyid + '&appid=' + main_1.main.appid,
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
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
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
    ;
}
exports.WeatherForAPolygon = WeatherForAPolygon;
//# sourceMappingURL=WeatherForAPolygon.js.map