import request = require("request");
import {main} from "./main";


export class SatelliteImagery {
    private urlAPI = main.url + "image/search";
    getSearchSatelliteImagesForAPolygon(polyid:string, start:number, end:number, resolution_min: number,
                                        resolution_max:number, type:string, coverage_max:number, coverage_min:number,
                                        clouds_max:number, clouds_min)
    {
        let options = {
            headers : {
                'User-Agent' : 'request'
            }
        }
        request.get(this.urlAPI + '?appid=' + main.appid + '&polyid=' + polyid + '&start=' + start + '&end=' + end, options, (error:any, response:any, body:any) => {
            console.log('getSearchSatelliteImagesForAPolygon ' + body);
        })
    }
}