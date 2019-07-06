import request = require("request");
import {main} from "../main";
import {uviPersonal} from "../personal/uviPersonal";

export class UVI {
    private urlAPI = main.agro_url + "uvi";

    getCurrentUVI(polyid: string){
        return new Promise((resolve, reject) => {
            let options: any = {
                url: this.urlAPI + '?polyid=' + polyid + '&appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options, (error:any,response:any,body:any) => {
                try {
                    if (response.statusCode === 200) {
                        const uvi = new uviPersonal().currentUVI(body , polyid);
                        resolve(uvi);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
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
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
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
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
            });
        });
    };
}