"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
class SatelliteImagery {
    constructor() {
        this.urlAPI = main_1.main.url + "image/search";
        this.options = {
            body: {},
            url: this.urlAPI,
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    getSearchSatelliteImagesForAPolygon(polyid, start, end, resolution_min, resolution_max, type, coverage_max, coverage_min, clouds_max, clouds_min) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '?appid=' + main_1.main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end +
                    '&resoloution_max=' + resolution_max + '&resolution_min=' + resolution_min + '&type=' + type +
                    '&coverage_min=' + coverage_min + '&coverage_max=' + coverage_max + '&clouds_min=' + clouds_min +
                    '&clouds_max=' + clouds_max,
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
                console.log('getSearchSatelliteImagesForAPolygon ' + body);
            });
        });
    }
}
exports.SatelliteImagery = SatelliteImagery;
//# sourceMappingURL=SatelliteImagery.js.map