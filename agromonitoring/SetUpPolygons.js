"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
class SetUpPolygons {
    constructor() {
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
    createNewPolygon(name, coordinates) {
        return new Promise((resolve, reject) => {
            this.options.url += "?appid=" + main_1.main.appid;
            this.options.body = {
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
            request.post(this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
    deleteAPolygon(polyid) {
        return new Promise((resolve, reject) => {
            this.options.url += '/' + polyid + '?appid=' + main_1.main.appid;
            request.del(this.options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
    updateAPolygon(polyid, name) {
        return new Promise((resolve, reject) => {
            this.options.url += '/' + polyid + '/' + '?appid=' + main_1.main.appid;
            this.options.body =
                {
                    id: polyid,
                    name: name,
                    geo_json: {
                        "something": "something"
                    }
                };
            request.put(this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
    getInfoForAPolygon(polyid) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/' + polyid + '?appid=' + main_1.main.appid,
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
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            });
        });
    }
    getListOfPolygons() {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '?appid=' + main_1.main.appid,
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
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            });
        });
    }
}
exports.SetUpPolygons = SetUpPolygons;
//# sourceMappingURL=SetUpPolygons.js.map