"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var main_1 = require("./main");
var AccumulatedTemperature = /** @class */ (function () {
    function AccumulatedTemperature() {
        this.urlAPI = main_1.main.url + 'weather/history/accumulated_temperature';
    }
    AccumulatedTemperature.prototype.getAccumulatedTemperatureByPolygon = function (polyid, start, end, threshold) {
        var options = {
            headers: {
                'User-Agent': 'request',
            }
        };
        request.get(this.urlAPI + '?appid=' + main_1.main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end + '&threshold' + threshold, options, function (error, response, body) {
            console.log('getAccumulatedTemperatureByPolygon ' + body);
        });
    };
    return AccumulatedTemperature;
}());
exports.AccumulatedTemperature = AccumulatedTemperature;
