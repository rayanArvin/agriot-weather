"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const meteomatics_1 = require("../personal/meteomatics");
class AgriculturalParameters {
    constructor() {
        this.options = {
            body: {},
            url: 'urlAPI',
            json: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: main_1.main.meteoAuthorization,
            }
        };
    }
    getGDD(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime
                + 'P20D:P1D/' + 'growing_degree_days_accumulated:gdd/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const gdd = new meteomatics_1.Meteomatics().GDD(body, location, ID);
                        resolve(gdd);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getET(ID, datetime, location, interval, format = 'csv') {
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'evapotranspiration_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().ET(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getGLTS(ID_polygon, datetime, location, format = 'csv') {
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'grass_land_temperature_sum:C/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().GLTS(body, location, ID_polygon);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getLW(ID_polygon, datetime, location, format = 'csv') {
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'leaf_wetness:idx/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().LW(body, location, ID_polygon);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPHN(datetime, location, format = 'csv') {
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'phytophthora_negative:idx/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().PHN(body, location);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}
exports.AgriculturalParameters = AgriculturalParameters;
//# sourceMappingURL=AgriculturalParameters.js.map