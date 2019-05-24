import request = require("request");
import {main} from "../main";

export class SetUpPolygons {
    private urlAPI = main.url + "polygons";
    private options = {
        body: {},
        url: this.urlAPI,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    createNewPolygon(name: string, coordinates: any) {
        return new Promise((resolve, reject)=>{
            this.options.url += "?appid=" + main.appid;
            this.options.body = {
                name: name,
                geo_json: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Polygon",
                        coordinates: coordinates
                    }
                }
            };
            request.post(this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });



    }

    deleteAPolygon(polyid:string){
        return new Promise((resolve, reject) => {
            this.options.url += '/' + polyid + '?appid=' + main.appid;
            request.del(this.options, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            })
        });

    }

    updateAPolygon(polyid:string,name:string){
        return new Promise((resolve, reject) => {
            this.options.url += '/' + polyid + '/' + '?appid=' + main.appid;
            this.options.body =
                {
                    id: polyid,
                    name:name,
                    geo_json:{
                        "something":"something"
                    }
                };
            request.put(this.options, function (error, response, body) {
                if (error)
                    reject(error);
                if (response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
            });
        });
    }

    getInfoForAPolygon(polyid:string) {
        return new Promise((resolve, reject) => {

            let options:any = {
                url: this.urlAPI + '/'+ polyid + '?appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options,(error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            })

        });
    }

    getListOfPolygons() {
        return new Promise((resolve, reject) => {
            let options:any = {
                url: this.urlAPI + '?appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options,(error:any,response:any,body:any) => {
                if (error)
                    reject(error);
                if(response.statusCode === 200)
                    resolve(body);
                else
                    reject(response.statusCode);
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            })
        });
    }
}

