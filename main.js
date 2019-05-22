"use strict";
//@ts-check
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherForAPolygon_1 = require("./WeatherForAPolygon");
var SetUpPolygons_1 = require("./SetUpPolygons");
var SoidData_1 = require("./SoidData");
var main = /** @class */ (function () {
    function main() {
        var data = new Date();
        var now = data.getTime();
        // console.log(now)
        var weather = new WeatherForAPolygon_1.WeatherForAPolygon();
        weather.getCurrentWeather('5ce11fecd861700028090cfd').then(function (body) {
        }).catch(function (error) {
        });
        weather.getForecastWeather('5cdfdb41d861700028090cee').then(function (body) {
        }).catch(function (error) {
        });
        weather.getHistoryWeather('5cc702f1cfb98100076d857e', now - 1000000, now).then(function (body) {
        }).catch(function (error) {
        });
        var polygons = new SetUpPolygons_1.SetUpPolygons();
        // polygons.createNewPolygon('sample', [[[57.36584,33.700406],[57.36699,33.699334],[57.368054,33.699313],[57.368003,33.700263],[57.366887,33.701099],[57.366029,33.701693],[57.365196,33.702036],[57.364389,33.701636],[57.363986,33.701185],[57.363642,33.700706],[57.36584,33.700406]]]).then(body => {
        //
        // }).catch(error => {
        //
        // });
        polygons.deleteAPolygon('5ce51a7ad86170000e090cd8').then(function (body) {
        }).catch(function (error) {
        });
        polygons.updateAPolygon('5cdfdadfd86170001b090cac', 'name_sample_updated', [[[53.41309, 36.140209], [53.414326, 36.148867], [53.400455, 36.148701], [53.396679, 36.140764], [53.41309, 36.140209]]]).then(function (body) {
        }).catch(function (error) {
        });
        polygons.getInfoForAPolygon('5cdfd9e3d861700028090cec').then(function (body) {
        }).catch(function (error) {
        });
        polygons.getListOfPolygons().then(function (body) {
        }).catch(function (error) {
        });
        var soil = new SoidData_1.SoidData();
        soil.getCurrentSoilData('5ce11fecd861700028090cfd').then(function (body) {
        }).catch(function (error) {
        });
        soil.getHistorySoil('5cc702f1cfb98100076d857e', now - 1000000, now).then(function (body) {
        }).catch(function (error) {
        });
        // const accumulated_temperature = new AccumulatedTemperature();
        // console.log("-------------accumulated temperature starts--------------");
        // accumulated_temperature.getAccumulatedTemperatureByPolygon('5cc702f1cfb98100076d857e', now - 1000000, now, 284);
        // console.log("-------------accumulated temperature ends--------------");
        //
        // const satellite_imagery = new SatelliteImagery();
        // satellite_imagery.getSearchSatelliteImagesForAPolygon('5ce11fecd861700028090cfd', 1500336000, 1508976000, )
    }
    main.appid = '3d4f37e5d802e3882a03c80fd423f59b';
    main.url = 'http://api.agromonitoring.com/agro/1.0/';
    return main;
}());
exports.main = main;
new main();
