import request = require("request");
import {main} from "../main";

export class Evapotranspiration {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.Authorization,
        }
    };

    getEV(datetime:string, location:string, interval:string, format:string){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'evapotranspiration_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                if(error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}