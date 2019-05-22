import request = require("request");
import {main} from "./main";

export class AccumulatedTemperature {
    private urlAPI = main.url + 'weather/history/accumulated_temperature';

    getAccumulatedTemperatureByPolygon(polyid: string, start: number, end:number, threshold: number) {
        let options = {
            headers: {
                'User-Agent': 'request',
            }
        }
        request.get(this.urlAPI + '?appid=' + main.appid + '&polyid=' + polyid + '&start='+start + '&end=' + end + '&threshold' + threshold, options, (error, response, body) => {
            console.log('getAccumulatedTemperatureByPolygon ' + body);
        })
    }
}