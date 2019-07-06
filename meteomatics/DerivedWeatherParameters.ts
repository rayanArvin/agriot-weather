import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class DerivedWeatherParameters {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getWeatherSymbol(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P4D:P1D/' + 'weather_symbol_1h:idx/' + location + '/' + format;
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

    getWeatherCode(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'weather_code_' + interval + ':idx/' + location + '/' + format;
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

    getWeatherText(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P4D:P1D/' + 'weather_text_en:str/' + location + '/' + format;
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

    getVisibility(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'visibility:km/' + location + '/' + format;
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

    getDewOrRime(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'dew_or_rime:idx/' + location + '/' + format;
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

    getRainfall(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'is_rain_' + interval + ':idx/' + location + '/' + format;
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

    getSleet(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'is_sleet_' + interval + ':idx/' + location + '/' + format;
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

    getSnowfall(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'is_snow_' + interval + ':idx/' + location + '/' + format;
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

    getFog(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'is_fog_' + interval + ':idx/' + location + '/' + format;
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

    getFrost(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'frost_warning:idx/' + location + '/' + format;
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

    getWindchill(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'windchill:C/' + location + '/' + format;
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

    getApparentTemperature(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 't_apparent:C/' + location + '/' + format;
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

    getWetBulbTemperature(ID:string , datetime:string, location:string, level:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wet_bulb_t_' + level + ':C/' + location + '/' + format;
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

    getIcingPotential(ID:string , datetime:string, location:string, level:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'icing_potential_' + level + ':idx/' + location + '/' + format;
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

    getSlipperyRoad(ID:string , datetime:string, location:string, interval:string, index:string, format:string = 'csv'){
        /*
            --- example ---
            index = idx, P
            */
        return new Promise((resolve, reject) => {
            let parameter:string= '';
            if (index == "idx") {
                let parameter = 'is_slippery_road_';
            } else {
                let parameter = 'prob_slippery_road_';
            }
            this.options.url = main.meteo_url + datetime + '/' + parameter + interval + ':'+ index +'/' + location + '/' + format;
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

    getPlanetaryBoundaryLayerHeight(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'pbl_height:m/' + location + '/' + format;
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

    getSnowLine(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'snow_line:m/' + location + '/' + format;
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

    getFreezingLevel(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'freezing_level:m/' + location + '/' + format;
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


    // Stratospheric Polar Vortex (SPV): Wind speed
    getSPV(ID:string , datetime:string, location:string, level:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'polar_vortex_' + level + ':ms/' + location + '/' + format;
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

    getPowerLineOscillatiOnWarning(ID:string , datetime:string, location:string, format:string = 'csv'){
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'polar_vortex_power_line_oscillation_24h:idx'+ '/' + location + '/' + format;
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

    getBiseIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'bise_index:hPa/' + location + '/' + format;
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

    getFoehnIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'foehn_index:hPa/' + location + '/' + format;
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

    getMoehlinJetIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'moehlin_jet:idx/' + location + '/' + format;
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

    getSantaAnaWindIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'santa_ana_wind:idx/' + location + '/' + format;
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

    getNorthAtlanticOscillationIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'north_atlantic_oscillation:idx/' + location + '/' + format;
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

    getSouthernOscillationIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'southern_oscillation:idx/' + location + '/' + format;
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

    getForestFireIndexByKaese(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'forest_fire_index_kaese:idx/' + location + '/' + format;
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

    getFosbergFireWeatherIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'fosberg_fire_weather_index:idx/' + location + '/' + format;
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

    getDroughtIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'P20D:P1D/' + 'drought_index:idx/' + location + '/' + format;
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

}