import request = require("request");
import {main} from "../main";

export class UVI {
    private urlAPI = main.url + "uvi";
    private options = {
        body: {},
        url: this.urlAPI,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    getCurrentUVI(polyid: string){
        return new Promise((resolve, reject) => {
            let options: any = {
                url: this.urlAPI + '?polyid=' + polyid + '&appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode)
            });
        });
    };

    getForecastUVI(polyid: string, cnt:number){
        return new Promise((resolve, reject) => {
            let options: any = {
                url: this.urlAPI + '/forecast' + '?polyid=' + polyid + '&appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                },
                body: {
                    cnt: cnt,
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode)
            });
        });
    };

    getHistoryUVI(polyid: string, start:number, end:number){
        return new Promise((resolve, reject) => {
            let options: any = {
                url: this.urlAPI + '/history' + '?polyid=' + polyid + '&appid=' + main.appid + '&start=' + start + '&end=' + end,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode)
            });
        });
    };
}