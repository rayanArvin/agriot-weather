"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var main_1 = require("./main");
var SoidData = /** @class */ (function () {
    function SoidData() {
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
    SoidData.prototype.getCurrentSoilData = function (polyid) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '?appid=' + main_1.main.appid + '&polyid=' + polyid,
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
    SoidData.prototype.getHistorySoil = function (polyid, start, end) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '/history?' + polyid + '&appid=' + main_1.main.appid + '&start=' + start + '&end=' + end,
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
    return SoidData;
}());
exports.SoidData = SoidData;
