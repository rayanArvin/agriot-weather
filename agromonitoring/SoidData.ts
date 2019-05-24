import request = require("request");
import {main} from "../main";

export class SoidData {
    private urlAPI = main.url + 'soil';
    private options = {
        body: {},
        url: this.urlAPI,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    getCurrentSoilData(polyid:string){
        return new Promise((resolve, reject) => {
            let options = {
                url : this.urlAPI + '?appid=' + main.appid + '&polyid=' + polyid,
                headers: {
                    'User-Agent':'request',
                }
            };
            request.get( options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }

    getHistorySoil(polyid:string ,start:number ,end:number){
        return new Promise((resolve, reject) => {
            let options = {
                url: this.urlAPI + '/history?' +polyid+'&appid=' + main.appid + '&start='+start + '&end=' + end,
                headers: {
                    'User-Agent':'request',
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            })
        });


    }
}