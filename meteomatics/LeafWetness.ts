import request = require("request");
import {main} from "../main";

export class LeafWetness {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.Authorization,
        }
    };

    getLW(datetime:string, location:string, format:string){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'leaf_wetness:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200)
                        resolve(body);
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