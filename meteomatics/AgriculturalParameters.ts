import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class AgriculturalParameters {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getGDD(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'growing_degree_days_accumulated:gdd/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getET(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'evapotranspiration_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getGLTS(ID_polygon:string , datetime:string, location:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'grass_land_temperature_sum:C/' + location + '/' + format;
            request.get(this.options, (error,response,body) => {
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID_polygon);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getLW(ID_polygon:string , datetime:string, location:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'leaf_wetness:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID_polygon);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPHN(ID_polygon:string, datetime:string, location:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'phytophthora_negative:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location, ID_polygon);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}