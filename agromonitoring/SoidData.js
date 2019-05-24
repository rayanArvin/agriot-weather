"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
class SoidData {
    constructor() {
        this.urlAPI = main_1.main.url + 'soil';
        this.options = {
            body: {},
            url: this.urlAPI,
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    getCurrentSoilData(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '?appid=' + main_1.main.appid + '&polyid=' + polyid,
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
    getHistorySoil(polyid, start, end) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/history?' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
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
}
exports.SoidData = SoidData;
//# sourceMappingURL=SoidData.js.map