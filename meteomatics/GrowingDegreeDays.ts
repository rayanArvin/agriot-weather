import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class GrowingDegreeDays {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getGDD(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                 + 'P20D:P1D/' + 'growing_degree_days_accumulated:gdd/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const gdd = new Meteomatics().GDD(body, location , ID);
                        resolve(gdd);
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