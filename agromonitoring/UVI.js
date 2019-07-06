"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const uviPersonal_1 = require("../personal/uviPersonal");
class UVI {
    constructor() {
        this.urlAPI = main_1.main.agro_url + "uvi";
    }
    getCurrentUVI(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '?polyid=' + polyid + '&appid=' + main_1.main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const uvi = new uviPersonal_1.uviPersonal().currentUVI(body, polyid);
                        resolve(uvi);
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
    getForecastUVI(polyid, cnt) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/forecast' + '?polyid=' + polyid + '&appid=' + main_1.main.appid,
                headers: {
                    'User-Agent': 'request'
                },
                body: {
                    cnt: cnt,
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
    ;
    getHistoryUVI(polyid, start, end) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/history' + '?polyid=' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
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
    ;
}
exports.UVI = UVI;
//# sourceMappingURL=UVI.js.map