import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class GrassLandTemperatureSum {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getGLTS(datetime:string, location:string, format:string){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'grass_land_temperature_sum:C/' + location + '/' + format;
            request.get(this.options, (error,response,body) => {
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().GLTS(body, location);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}