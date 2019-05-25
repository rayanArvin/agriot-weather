import request = require("request");
import {main} from "../main";

export class MostSimilarYear {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.Authorization,
        }
    };

    getMSY(datetime:string, location:string, format:string){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'most_similar_year:y/' + location + '/' + format;
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