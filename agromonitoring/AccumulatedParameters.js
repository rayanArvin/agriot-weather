"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
class AccumulatedParameters {
    constructor() {
        this.urlAPI = main_1.main.agro_url + 'weather/history/';
    }
    getAccumulatedTemperatureByPolygon(polyid, start, end, threshold) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + 'accumulated_temperature' + '?appid=' + main_1.main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end + '&threshold' + threshold,
                headers: {
                    'User-Agent': 'request',
                },
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
    getAccumulatedPrecipitationByPolygon(polyid, start, end) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + 'accumulated_precipitation' + '?appid=' + main_1.main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end,
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
}
exports.AccumulatedParameters = AccumulatedParameters;
//# sourceMappingURL=AccumulatedParameters.js.map