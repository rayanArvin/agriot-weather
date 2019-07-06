import request = require("request");
import {main} from "../main";


export class SatelliteImagery {
    private urlAPI = main.agro_url + "image/search";

    getSearchSatelliteImagesForAPolygon(polyid:string, start:number, end:number, resolution_min: number,
                                        resolution_max:number, type:string, coverage_max:number, coverage_min:number,
                                        clouds_max:number, clouds_min: number)
    {
        return new Promise((resolve, reject) => {
            let options = {
                url : this.urlAPI + '?appid=' + main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end +
                    '&resoloution_max=' + resolution_max + '&resolution_min=' + resolution_min +  '&type=' + type +
                    '&coverage_min=' + coverage_min + '&coverage_max=' + coverage_max + '&clouds_min=' + clouds_min +
                '&clouds_max=' + clouds_max,
                headers: {
                    'User-Agent':'request',
                }
            };
            request.get(options, (error:any, response:any, body:any) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
            }) ;
        });


    }
}