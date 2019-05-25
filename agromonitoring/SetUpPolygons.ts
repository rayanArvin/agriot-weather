import request = require("request");
import {main} from "../main";

export class SetUpPolygons {
    private urlAPI = main.agro_url + "polygons";
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
                try {
                    if (response.statusCode === 201)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
            });
        });



    }

    deleteAPolygon(polyid:string){
        return new Promise((resolve, reject) => {
            this.options.url += '/' + polyid + '?appid=' + main.appid;
            request.del(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 204)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
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

    getInfoForAPolygon(polyid:string) {
        return new Promise((resolve, reject) => {

            let options:any = {
                url: this.urlAPI + '/'+ polyid + '?appid=' + main.appid,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request.get(options,(error:any,response:any,body:any) => {
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
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
                try {
                    if (response.statusCode === 200)
                        resolve(body);
                    else
                        reject(response.statusCode);
                } catch(e) {
                    reject(e);
                }
                // const data = JSON.parse(body);
                // console.log(data.weather[0].main);
            })
        });
    }
}

