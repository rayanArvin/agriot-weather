"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var main_1 = require("./main");
var SatelliteImagery = /** @class */ (function () {
    function SatelliteImagery() {
        this.urlAPI = main_1.main.url + "image/search";
    }
    SatelliteImagery.prototype.getSearchSatelliteImagesForAPolygon = function (polyid, start, end, resolution_min, resolution_max, type, coverage_max, coverage_min, clouds_max, clouds_min) {
        var options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(this.urlAPI + '?appid=' + main_1.main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end, options, function (error, response, body) {
            console.log('getSearchSatelliteImagesForAPolygon ' + body);
        });
    };
    return SatelliteImagery;
}());
exports.SatelliteImagery = SatelliteImagery;
