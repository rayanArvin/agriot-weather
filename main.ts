//@ts-check

import {WeatherForAPolygon} from "./WeatherForAPolygon";
import {SetUpPolygons} from "./SetUpPolygons";
import {SoidData} from "./SoidData";
import {AccumulatedTemperature} from "./AccumulatedTemperature";
import {SatelliteImagery} from "./SatelliteImagery";


export class main {
    public static appid:string = '3d4f37e5d802e3882a03c80fd423f59b';
    public static url:string = 'http://api.agromonitoring.com/agro/1.0/';
    constructor() {
        let data = new Date();
        let now = data.getTime();
        // console.log(now)
        let weather = new WeatherForAPolygon();
        weather.getCurrentWeather('5ce11fecd861700028090cfd').then(body => {

        }).catch(error => {

        });
        weather.getForecastWeather( '5cdfdb41d861700028090cee').then(body => {

        }).catch(error =>{

        });
        weather.getHistoryWeather('5cc702f1cfb98100076d857e', now - 1000000, now).then(body =>{

        }).catch(error => {

        });

        const polygons = new SetUpPolygons();
        // polygons.createNewPolygon('sample', [[[57.36584,33.700406],[57.36699,33.699334],[57.368054,33.699313],[57.368003,33.700263],[57.366887,33.701099],[57.366029,33.701693],[57.365196,33.702036],[57.364389,33.701636],[57.363986,33.701185],[57.363642,33.700706],[57.36584,33.700406]]]).then(body => {
        //
        // }).catch(error => {
        //
        // });

        polygons.deleteAPolygon('5ce51a7ad86170000e090cd8').then(body => {

        }).catch(error => {

        });
        polygons.updateAPolygon('5cdfdadfd86170001b090cac', 'name_sample_updated').then(body=>{

        }).catch(error => {

        });
        polygons.getInfoForAPolygon('5cdfd9e3d861700028090cec').then(body => {

        }).catch(error => {

        });
        polygons.getListOfPolygons().then(body => {

        }).catch(error => {

        });

        const soil = new SoidData();
        soil.getCurrentSoilData('5ce11fecd861700028090cfd').then(body => {

        }).catch(error => {

        });
        soil.getHistorySoil('5cc702f1cfb98100076d857e', now - 1000000, now).then(body => {

        }).catch(error => {

        });


        // const accumulated_temperature = new AccumulatedTemperature();
        // console.log("-------------accumulated temperature starts--------------");
        // accumulated_temperature.getAccumulatedTemperatureByPolygon('5cc702f1cfb98100076d857e', now - 1000000, now, 284);
        // console.log("-------------accumulated temperature ends--------------");
        //
        // const satellite_imagery = new SatelliteImagery();
        // satellite_imagery.getSearchSatelliteImagesForAPolygon('5ce11fecd861700028090cfd', 1500336000, 1508976000, )
    }
}



new main();
