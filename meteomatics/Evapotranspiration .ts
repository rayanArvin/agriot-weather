import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class Evapotranspiration {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getEV(datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'evapotranspiration_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().ET(body,location);
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