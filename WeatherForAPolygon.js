"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var main_1 = require("./main");
var WeatherForAPolygon = /** @class */ (function () {
    function WeatherForAPolygon() {
        this.urlAPI = main_1.main.url + "weather";
        this.options = {
            body: {},
            url: this.urlAPI,
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    WeatherForAPolygon.prototype.getCurrentWeather = function (polyid) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '?polyid=' + polyid + '&appid=' + main_1.main.appid,
                headers: {
                    'User-Agent': 'request',
                }
            };
            request.get(options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    ;
    WeatherForAPolygon.prototype.getForecastWeather = function (polyid) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                headers: {
                    url: _this.urlAPI + '/forecast?polyid=' + polyid + '&appid=' + main_1.main.appid,
                    'User-Agent': 'request'
                }
            };
            request.get(options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    ;
    WeatherForAPolygon.prototype.getHistoryWeather = function (polyid, start, end) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '/history?' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    ;
    return WeatherForAPolygon;
}());
exports.WeatherForAPolygon = WeatherForAPolygon;
