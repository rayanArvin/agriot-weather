import request = require("request");
import {main} from "../main";

export class WeatherForAPolygon {
    private urlAPI = main.agro_url + "weather";
    private options = {
        body: {},
        url: this.urlAPI,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    getCurrentWeather(polyid: string) {
        return new Promise((resolve, reject) => {
            let options:any = {
                url: this.urlAPI + '?polyid=' + polyid + '&appid=' + main.appid,
                headers: {
                    'User-Agent': 'request',
                }
            };
            request.get(options,(error:any,response:any,body:any) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
            });
        });
    };

    getForecastWeather(polyid: string) {
        return new Promise((resolve, reject) => {
            let options: any = {
                headers: {
                    url: this.urlAPI + '/forecast?polyid=' + polyid + '&appid=' + main.appid,
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error: any, response: any, body: any) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
            });
        });
    };

    getHistoryWeather(polyid: string, start:number, end:number){
        return new Promise((resolve, reject) => {
            let options: any = {
                url: this.urlAPI + '/history?' + polyid + '&appid=' + main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
            });
        });
    };
}