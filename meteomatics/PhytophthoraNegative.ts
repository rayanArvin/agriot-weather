import request = require("request");
import {main} from "../main";

export class PhytophthoraNegative {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.Authorization,
        }
    };

    getPHN(datetime:string, location:string, format:string){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'phytophthora_negative:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                if(error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}