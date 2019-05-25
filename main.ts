// import {WeatherForAPolygon} from "./agromonitoring/WeatherForAPolygon";
// import {SetUpPolygons} from "./agromonitoring/SetUpPolygons";
// import {SoidData} from "./agromonitoring/SoidData";
// import {AccumulatedParameters} from "./agromonitoring/AccumulatedParameters";
// import {SatelliteImagery} from "./agromonitoring/SatelliteImagery";
// import {UVI} from "./agromonitoring/UVI";
// import {GrowingDegreeDays} from "./meteomatics/GrowingDegreeDays";
// import {Evapotranspiration} from "./meteomatics/Evapotranspiration ";
// import {GrassLandTemperatureSum} from "./meteomatics/GrassLandTemperatureSum";
// import {LeafWetness} from "./meteomatics/LeafWetness";
// import {PhytophthoraNegative} from "./meteomatics/PhytophthoraNegative";
// import {MostSimilarYear} from "./meteomatics/MostSimilarYear";


export class main {
    public static appid:string = 'replace_your_appid';
    public static Authorization:string = 'replace_your_authorization_key';
    public static agro_url:string = 'https://api.agromonitoring.com/agro/1.0/';
    public static meteo_url: string = 'https://api.meteomatics.com/';
    // constructor() {
    //     let data = new Date();
    //     let now = data.getTime();
    //     // console.log(now)
    //     const weather = new WeatherForAPolygon();
    //     // weather.getCurrentWeather('5ce5069ad86170001b090d13').then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //     // weather.getForecastWeather( '5cdfdb41d861700028090cee').then(body => {
    //     //
    //     // }).catch(error =>{
    //     //
    //     // });
    //     // weather.getHistoryWeather('5cc702f1cfb98100076d857e', now - 1000000, now).then(body =>{
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //     const polygons = new SetUpPolygons();
    //     // polygons.createNewPolygon('sample', [[[57.36584,33.700406],[57.36699,33.699334],[57.368054,33.699313],[57.368003,33.700263],[57.366887,33.701099],[57.366029,33.701693],[57.365196,33.702036],[57.364389,33.701636],[57.363986,33.701185],[57.363642,33.700706],[57.36584,33.700406]]]).then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //     // polygons.deleteAPolygon('5ce51a7ad86170000e090cd8').then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //     // polygons.updateAPolygon('5cdfdadfd86170001b090cac', 'name_sample_updated').then(body=>{
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //     // polygons.getInfoForAPolygon('5cdfd9e3d861700028090cec').then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //     // polygons.getListOfPolygons().then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //     const soil = new SoidData();
    //     // soil.getCurrentSoilData('5ce11fecd861700028090cfd').then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //     // soil.getHistorySoil('5cc702f1cfb98100076d857e', now - 1000000, now).then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //
    //     const accumulated_parameters = new AccumulatedParameters();
    //     // accumulated_parameters.getAccumulatedTemperatureByPolygon('5ce5069ad86170001b090d13', now - 1000000, now, 284).then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //     //
    //     // accumulated_parameters.getAccumulatedPrecipitationByPolygon('5ce5069ad86170001b090d13', now-1000000, now).then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //     const satellite_imagery = new SatelliteImagery();
    //     // satellite_imagery.getSearchSatelliteImagesForAPolygon('5ce11fecd861700028090cfd', 1500336000, 1508976000, )
    //
    //     const uvi = new UVI();
    //     // uvi.getCurrentUVI('5ce5069ad86170001b090d13').then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //
    //     // uvi.getForecastUVI('5ce5069ad86170001b090d13',10).then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //
    //     // uvi.getHistoryUVI('5ce5069ad86170001b090d13',now - 1000000, now).then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //
    //     const gdd = new GrowingDegreeDays();
    //     gdd.getGDD('now','50,10','json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const ev = new Evapotranspiration();
    //     ev.getEV('now', '50,10', '1h' , 'json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const glts = new GrassLandTemperatureSum();
    //     glts.getGLTS('now', '50,10', 'json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const lw = new LeafWetness();
    //     lw.getLW('now', '50,10', 'json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const phn = new PhytophthoraNegative();
    //     phn.getPHN('now', '50,10', 'json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const msy = new MostSimilarYear();
    //     msy.getMSY('now', '50,10', 'json').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }
}



new main();
