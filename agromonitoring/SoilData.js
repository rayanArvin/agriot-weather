"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const soilPersonal_1 = require("../personal/soilPersonal");
class SoilData {
    constructor() {
        this.urlAPI = main_1.main.agro_url + 'soil';
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
                try {
                    if (response.statusCode === 200) {
                        const soil = new soilPersonal_1.soilPersonal().currentSoil(body, polyid);
                        resolve(soil);
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
    getHistorySoilData(polyid, start, end) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/history?' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request',
                }
            };
            request.get(options, (error, response, body) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.SoilData = SoilData;
//# sourceMappingURL=SoilData.js.map