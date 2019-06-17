"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const meteomatics_1 = require("../personal/meteomatics");
class PhytophthoraNegative {
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
exports.PhytophthoraNegative = PhytophthoraNegative;
//# sourceMappingURL=PhytophthoraNegative.js.map