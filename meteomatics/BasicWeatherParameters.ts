import request = require("request");
import {main} from "../main";
import {Meteomatics} from "../personal/meteomatics";

export class BasicWeatherParameters {
    private options = {
        body: {},
        url: 'urlAPI',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: main.meteoAuthorization,
        }
    };

    getImmediateTemperature(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: -150cm, -50cm, -15cm, -5cm, 0m, 2m, 100m - 10000m (continuously), 1000hPa, 975hPa, 950hPa, 925hPa, 900hPa, 875hPa, 850hPa, 825hPa, 800hPa, 775hPa, 750hPa, 700hPa, 650hPa, 600hPa, 550hPa, 500hPa, 450hPa, 400hPa, 350hPa, 300hPa, 200hPa, 50hPa, 10hPa
        Available units: C, K, F
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 't_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getIntervalValuesOfTheTemperature(ID:string , datetime:string, location:string, measure:string, level:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: 0m, 2m, 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa -150cm, -50cm, -15cm, -5cm
        Available measures: mean, min, max
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: C, K, F
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 't_' + measure + '_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getRelativeHumidity(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: 2m, 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available units: p
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'relative_humidity_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAbsoluteHumidity(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'absolute_humidity_2m:gm3/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getInstantaneousDewPoint(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: 2m, 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available units: C, K, F
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'dew_point_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPressureAdjustedToSeaLevel(ID:string , datetime:string, location:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available units: hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'msl_pressure' + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getSurfacePressure(ID:string , datetime:string, location:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available units: hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'sfc_pressure' + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getSurfacePressureMean(ID:string , datetime:string, location:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'sfc_pressure_mean_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPressureAtHigherAltitudes(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitude levels: 1m to 10000m
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'pressure_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getMeanPressureAtHigherAltitudes(ID:string , datetime:string, location:string, level:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h﻿
        Available units: hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'pressure_mean_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAtmosphericDensity(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitude levels: 0m to 10000m
        Available units: kgm3
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'air_density_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getInstantaneousWindSpeed(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitude levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_speed_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getInstantaneousWindDirection(ID:string , datetime:string, location:string, level:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_speed_' + level + ':d/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getWindSpeedU(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_speed_u_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getWindSpeedV(ID:string , datetime:string, location:string, level:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_speed_v_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getIntervalWindSpeed(ID:string , datetime:string, location:string, level:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available Intervals: 1h, 3h, 6h, 12h, 24h
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_speed_mean_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getIntervalWindGusts(ID:string , datetime:string, location:string, level:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available Intervals: 1h, 3h, 6h, 12h, 24h
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_gusts_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getIntervalWindDirection(ID:string , datetime:string, location:string, level:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'wind_dir_mean_' + level + '_' + interval + ':d' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAmountOfCloudCover(ID:string , datetime:string, location:string, level:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: low, medium, high, total, effective
        Available units: octas, p
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + level + '_cloud_cover:' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAccumulatedPrecipitation(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available accumulation intervals: 5min, 10min, 15min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'precip_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPrecipitationType(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'precip_type:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPrecipitationLayer5Min(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime
                + 'precip_layer_5min:idx/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body, location , ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getPrecipitationProbability(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 5min, 10min, 15min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'prob_precip_' + interval + ':p/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getHail(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'hail:cm' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getHailInterval(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 10min, 20min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'hail_' + interval + ':cm/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAccumulatedEvaporation(ID:string , datetime:string, location:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: mm
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'evaporation_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getCAPE(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'cape:Jkg' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getLiftedIndex(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'lifted_index:K' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getThunderstormProbabilities(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'prob_tstorm_' + interval + ':p/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getFrostDepth(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'frost_depth:cm' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAmountOfSnowMelt(ID:string , datetime:string, location:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: cm, mm
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'snow_melt_' + interval + ":" + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAmountOfFreshSnow(ID:string , datetime:string, location:string, interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'fresh_snow_'+ interval + ':cm' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getSnowDepth(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'snow_depth:cm' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getGeopotentialHeight(ID:string , datetime:string, location:string, level:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'geopotential_height_'+ level + ':m' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getClearSkyRadiationInstantaneousFlux(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'clear_sky_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getClearSkyRadiationAccumulatedEnergy(ID:string , datetime:string, location:string,interval:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'clear_sky_energy_' + interval + ':J/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getDiffuseRadiationInstantaneousFlux(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'diffuse_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getDirectRadiationInstantaneousFlux(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'direct_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getGlobalRadiationInstantaneousFlux(ID:string , datetime:string, location:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + 'global_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

    getAccumulatedEnergy(ID:string , datetime:string, location:string, type:string, interval:string, unit:string, format:string = 'csv'){
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available type: global, direct, diffuse
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: Ws, Wh, J
        */
        return new Promise((resolve, reject) => {
            this.options.url = main.meteo_url + datetime + '/' + type + '_rad_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error,response,body)=>{
                try {
                    if (response.statusCode === 200){
                        const meteomatics = new Meteomatics().MeteoMatics(body,location,ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response);
                } catch(e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }

}