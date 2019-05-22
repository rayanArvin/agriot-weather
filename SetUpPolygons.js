"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var main_1 = require("./main");
var SetUpPolygons = /** @class */ (function () {
    function SetUpPolygons() {
        this.urlAPI = main_1.main.url + "polygons";
        this.options = {
            body: {},
            url: this.urlAPI,
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    SetUpPolygons.prototype.createNewPolygon = function (name, coordinates) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            _this.options.url += "?appid=" + main_1.main.appid;
            _this.options.body = {
                name: name,
                geo_json: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Polygon",
                        coordinates: coordinates
                    }
                }
            };
            request.post(_this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    SetUpPolygons.prototype.deleteAPolygon = function (polyid) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            _this.options.url += '/' + polyid + '?appid=' + main_1.main.appid;
            request.del(_this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    SetUpPolygons.prototype.updateAPolygon = function (polyid, name, coordinates) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            _this.options.url += '/' + polyid + '/' + "?appid=" + main_1.main.appid;
            _this.options.body =
                {
                    id: polyid,
                    name: name,
                    geo_json: {
                        "something": "something"
                    }
                };
            request.put(_this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    };
    SetUpPolygons.prototype.getInfoForAPolygon = function (polyid) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '/' + polyid + '?appid=' + main_1.main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            });
        });
    };
    SetUpPolygons.prototype.getListOfPolygons = function () {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var options = {
                url: _this.urlAPI + '?appid=' + main_1.main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            });
        });
    };
    return SetUpPolygons;
}());
exports.SetUpPolygons = SetUpPolygons;
