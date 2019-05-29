
export class main {
    public static appid:string = '3d4f37e5d802e3882a03c80fd423f59b';
    public static Authorization:string = 'Basic c2FtYWNvbnRyb2xfZWJhZGk6MkwxUnlQUzhqbEt3cg==';
    public static agro_url:string = 'https://api.agromonitoring.com/agro/1.0/';
    public static meteo_url: string = 'https://api.meteomatics.com/';
    constructor() {
        let data = new Date();
        let now = data.getTime();
    //     // console.log(now)
    //     const weather = new WeatherForAPolygon();
    //     weather.getCurrentWeather('5cc702f1cfb98100076d857e').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
        // weather.getForecastWeather( '5cc702f1cfb98100076d857e').then(body => {
        //     console.log(body)
        // }).catch(error =>{
        //     console.log(error)
        // });
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
    //     polygons.getInfoForAPolygon('5cc702f1cfb98100076d857e').then(body => {
    //         console.log(body);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    //     // polygons.getListOfPolygons().then(body => {
    //     //
    //     // }).catch(error => {
    //     //
    //     // });
    //
    //     const soil = new SoilData();
        // soil.getCurrentSoilData('5ce93013d86170001b090d49').then(body => {
        //     console.log(body);
        // }).catch(error => {
        //     console.log(error);
        // });
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
    //     satellite_imagery.getSearchSatelliteImagesForAPolygon('5cc702f1cfb98100076d857e', 1500336000, 1508976000 ).then(body =>{
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const uvi = new UVI();
        // uvi.getCurrentUVI('5ce93013d86170001b090d49').then(body => {
        //     console.log(body)
        // }).catch(error => {
        //     console.log(error)
        // });
    //
    //     uvi.getForecastUVI('5ce93013d86170001b090d49',10).then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     // uvi.getHistoryUVI('5ce5069ad86170001b090d13',now - 1000000, now).then(body => {
    //     //     console.log(body)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // });
    //
    //     const gdd = new GrowingDegreeDays();
    //     gdd.getGDD('2019-05-28T00:00:00ZP20D:P1D','50,10','csv').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const ev = new Evapotranspiration();
    //     ev.getEV('now', '50,10', '1h' , 'csv').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const glts = new GrassLandTemperatureSum();
    //     glts.getGLTS('now', '50,10', 'csv').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const lw = new LeafWetness();
    //     lw.getLW('now', '50,10', 'csv').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //
    //     const phn = new PhytophthoraNegative();
    //     phn.getPHN('now', '50,10', 'csv').then(body => {
    //         console.log(body)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    }
}



new main();
