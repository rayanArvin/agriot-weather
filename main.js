"use strict";
//@ts-check
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherForAPolygon_1 = require("./agromonitoring/WeatherForAPolygon");
const SetUpPolygons_1 = require("./agromonitoring/SetUpPolygons");
const SoidData_1 = require("./agromonitoring/SoidData");
const AccumulatedParameters_1 = require("./agromonitoring/AccumulatedParameters");
const SatelliteImagery_1 = require("./agromonitoring/SatelliteImagery");
const UVI_1 = require("./agromonitoring/UVI");
const GrowingDegreeDays_1 = require("./meteomatics/GrowingDegreeDays");
const Evapotranspiration_1 = require("./meteomatics/Evapotranspiration ");
const GrassLandTemperatureSum_1 = require("./meteomatics/GrassLandTemperatureSum");
const LeafWetness_1 = require("./meteomatics/LeafWetness");
const PhytophthoraNegative_1 = require("./meteomatics/PhytophthoraNegative");
const MostSimilarYear_1 = require("./meteomatics/MostSimilarYear");
class main {
    constructor() {
        let data = new Date();
        let now = data.getTime();
        // console.log(now)
        const weather = new WeatherForAPolygon_1.WeatherForAPolygon();
        // weather.getCurrentWeather('5ce5069ad86170001b090d13').then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
        // weather.getForecastWeather( '5cdfdb41d861700028090cee').then(body => {
        //
        // }).catch(error =>{
        //
        // });
        // weather.getHistoryWeather('5cc702f1cfb98100076d857e', now - 1000000, now).then(body =>{
        //
        // }).catch(error => {
        //
        // });
        const polygons = new SetUpPolygons_1.SetUpPolygons();
        // polygons.createNewPolygon('sample', [[[57.36584,33.700406],[57.36699,33.699334],[57.368054,33.699313],[57.368003,33.700263],[57.366887,33.701099],[57.366029,33.701693],[57.365196,33.702036],[57.364389,33.701636],[57.363986,33.701185],[57.363642,33.700706],[57.36584,33.700406]]]).then(body => {
        //
        // }).catch(error => {
        //
        // });
        // polygons.deleteAPolygon('5ce51a7ad86170000e090cd8').then(body => {
        //
        // }).catch(error => {
        //
        // });
        // polygons.updateAPolygon('5cdfdadfd86170001b090cac', 'name_sample_updated').then(body=>{
        //
        // }).catch(error => {
        //
        // });
        // polygons.getInfoForAPolygon('5cdfd9e3d861700028090cec').then(body => {
        //
        // }).catch(error => {
        //
        // });
        // polygons.getListOfPolygons().then(body => {
        //
        // }).catch(error => {
        //
        // });
        const soil = new SoidData_1.SoidData();
        // soil.getCurrentSoilData('5ce11fecd861700028090cfd').then(body => {
        //
        // }).catch(error => {
        //
        // });
        // soil.getHistorySoil('5cc702f1cfb98100076d857e', now - 1000000, now).then(body => {
        //
        // }).catch(error => {
        //
        // });
        const accumulated_parameters = new AccumulatedParameters_1.AccumulatedParameters();
        // accumulated_parameters.getAccumulatedTemperatureByPolygon('5ce5069ad86170001b090d13', now - 1000000, now, 284).then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
        //
        // accumulated_parameters.getAccumulatedPrecipitationByPolygon('5ce5069ad86170001b090d13', now-1000000, now).then(body => {
        //
        // }).catch(error => {
        //
        // });
        const satellite_imagery = new SatelliteImagery_1.SatelliteImagery();
        // satellite_imagery.getSearchSatelliteImagesForAPolygon('5ce11fecd861700028090cfd', 1500336000, 1508976000, )
        const uvi = new UVI_1.UVI();
        // uvi.getCurrentUVI('5ce5069ad86170001b090d13').then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
        // uvi.getForecastUVI('5ce5069ad86170001b090d13',10).then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
        // uvi.getHistoryUVI('5ce5069ad86170001b090d13',now - 1000000, now).then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
        const gdd = new GrowingDegreeDays_1.GrowingDegreeDays();
        gdd.getGDD('now', '50,10', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        const ev = new Evapotranspiration_1.Evapotranspiration();
        ev.getEV('now', '50,10', '1h', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        const glts = new GrassLandTemperatureSum_1.GrassLandTemperatureSum();
        glts.getGLTS('now', '50,10', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        const lw = new LeafWetness_1.LeafWetness();
        lw.getLW('now', '50,10', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        const phn = new PhytophthoraNegative_1.PhytophthoraNegative();
        phn.getPHN('now', '50,10', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        const msy = new MostSimilarYear_1.MostSimilarYear();
        msy.getMSY('now', '50,10', 'json').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
    }
}
main.appid = '3d4f37e5d802e3882a03c80fd423f59b';
main.agro_url = 'https://api.agromonitoring.com/agro/1.0/';
main.meteo_url = 'https://api.meteomatics.com/';
exports.main = main;
new main();
//# sourceMappingURL=main.js.map