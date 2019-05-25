import request = require("request");
import {main} from "../main";

export class SoidData {
    private urlAPI = main.agro_url + 'soil';

    getCurrentSoilData(polyid:string){
        return new Promise((resolve, reject) => {
            let options = {
                url : this.urlAPI + '?appid=' + main.appid + '&polyid=' + polyid,
                headers: {
                    'User-Agent':'request',
                }
            };
            request.get( options, (error, response, body) => {
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
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
            })
        });


    }
}