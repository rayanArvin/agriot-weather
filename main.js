"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicWeatherParameters_1 = require("./meteomatics/BasicWeatherParameters");
class main {
    constructor() {
        // const DWP = new DerivedWeatherParameters();
        // DWP.getWeatherSymbol('1254kk','now','50,10', 'csv').then(body => {
        //     console.log(body);
        // }).catch(error => {
        //     console.log(error);
        // });
        const BWP = new BasicWeatherParameters_1.BasicWeatherParameters();
        BWP.getInstantaneousWindSpeed('asdas', 'now', '50,10', '2m', 'ms', 'csv').then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
    }
}
main.appid = '3d4f37e5d802e3882a03c80fd423f59b';
main.Authorization = 'Basic cmF5YW5faGVpZGFyeTpYNXhtNm5BcloyU3BP';
main.meteoAuthorization = 'Basic cmF5YW5faGVpZGFyeTpYNXhtNm5BcloyU3BP';
main.agro_url = 'https://api.agromonitoring.com/agro/1.0/';
main.meteo_url = 'https://api.meteomatics.com/';
exports.main = main;
new main();
//# sourceMappingURL=main.js.map