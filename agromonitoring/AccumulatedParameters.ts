import request = require("request");
import {main} from "../main";

export class AccumulatedParameters {
    private urlAPI = main.url + 'weather/history/';
    private options = {
        body: {},
        url: this.urlAPI,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    getAccumulatedTemperatureByPolygon(polyid: string, start: number, end:number, threshold: number) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + 'accumulated_temperature' + '?appid=' + main.appid + '&polyid=' + polyid + '&start='+start + '&end=' + end + '&threshold' + threshold,
                headers: {
                    'User-Agent': 'request',
                },
            };
            request.get(options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            })
        });

    };

    getAccumulatedPrecipitationByPolygon(polyid:string, start:number, end:number){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + 'accumulated_precipitation' + '?appid=' + main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options,(error,response,body)=>{
               if (error)
                   reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }
}