"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const main_1 = require("../main");
const meteomatics_1 = require("../personal/meteomatics");
class BasicWeatherParameters {
    constructor() {
        this.options = {
            body: {},
            url: 'urlAPI',
            json: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: main_1.main.meteoAuthorization,
            }
        };
    }
    getImmediateTemperature(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = C, F, K
        level = -150cm, -50cm, 0m, 2m, 1000hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 't_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().ImmediateTemperature(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getIntervalValuesOfTheTemperature(ID, datetime, location, measure, level, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = C, F, K
        level = -150cm, -50cm, 0m, 2m, 1000hPa
        measure = mean, min, max
        interval = 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 't_' + measure + '_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().IntervalValuesOfTheTemperature(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getRelativeHumidity(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = p
        level = 2m, 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'relative_humidity_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().RelativeHumidity(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAbsoluteHumidity(ID, datetime, location, format = 'csv') {
        /*
            --- example ---
            datetime = 2019-05-28T00:00:00ZP20D:P1D
            location = 50,10
            */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime
                + 'absolute_humidity_2m:gm3/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const gdd = new meteomatics_1.Meteomatics().AbsoluteHumidity(body, location, ID);
                        resolve(gdd);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getInstantaneousDewPoint(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = C, K, F
        level = 2m, 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'dew_point_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().InstantaneousDewPoint(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPressureAdjustedToSeaLevel(ID, datetime, location, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'msl_pressure' + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().PressureAdjustedToSeaLevel(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getSurfacePressure(ID, datetime, location, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = hPa, Pa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'sfc_pressure' + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().SurfacePressure(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getSurfacePressureMean(ID, datetime, location, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = hPa, Pa
        interval = 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'sfc_pressure_mean_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().SurfacePressureMean(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPressureAtHigherAltitudes(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        level = 1m to 10000m
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'pressure_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().PressureAtHigherAltitudes(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getMeanPressureAtHigherAltitudes(ID, datetime, location, level, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        unit = hPa, Pa
        interval = 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'pressure_mean_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().MeanPressureAtHigherAltitudes(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAtmosphericDensity(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        level = 1m to 10000m
        unit = kgm3
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'air_density_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AtmosphericDensity(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getInstantaneousWindSpeed(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        level = 1m to 10000m
        unit = ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_speed_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().InstantaneousWindSpeed(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getInstantaneousWindDirection(ID, datetime, location, level, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_speed_' + level + ':d/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().InstantaneousWindDirection(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getWindSpeedU(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_speed_u_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().WindSpeedU(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getWindSpeedV(ID, datetime, location, level, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available altitudes levels: 10m to 10000m
        Available pressure levels: 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa, 200hPa, 50hPa
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_speed_v_' + level + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().WindSpeedV(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getIntervalWindSpeed(ID, datetime, location, level, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available Intervals: 1h, 3h, 6h, 12h, 24h
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_speed_mean_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().IntervalWindSpeed(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getIntervalWindGusts(ID, datetime, location, level, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available Intervals: 1h, 3h, 6h, 12h, 24h
        Available speed units: ms, kmh, kn, bft
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_gusts_' + level + '_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().IntervalWindGusts(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getIntervalWindDirection(ID, datetime, location, level, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: 10m, 100m, 1000hPa, 950hPa, 925hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'wind_dir_mean_' + level + '_' + interval + ':d' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().IntervalWindDirection(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAmountOfCloudCover(ID, datetime, location, level, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        Available levels: low, medium, high, total, effective
        Available units: octas, p
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + level + '_cloud_cover:' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AmountOfCloudCover(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAccumulatedPrecipitation(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available accumulation intervals: 5min, 10min, 15min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'precip_' + interval + ':mm/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AccumulatedPrecipitation(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPrecipitationType(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime
                + 'precip_type:idx/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const gdd = new meteomatics_1.Meteomatics().PrecipitationType(body, location, ID);
                        resolve(gdd);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPrecipitationLayer5Min(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime
                + 'precip_layer_5min:idx/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const gdd = new meteomatics_1.Meteomatics().PrecipitationLayer5Min(body, location, ID);
                        resolve(gdd);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getPrecipitationProbability(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 5min, 10min, 15min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'prob_precip_' + interval + ':p/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().PrecipitationProbability(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getHail(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'hail:cm' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().Hail(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getHailInterval(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 10min, 20min, 30min, 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'hail_' + interval + ':cm/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().HailInterval(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAccumulatedEvaporation(ID, datetime, location, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: mm
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'evaporation_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AccumulatedEvaporation(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getCAPE(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'cape:Jkg' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().CAPE(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getLiftedIndex(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'lifted_index:K' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().LiftedIndex(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getThunderstormProbabilities(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'prob_tstorm_' + interval + ':p/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().ThunderstormProbabilities(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getFrostDepth(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'frost_depth:cm' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().FrostDepth(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAmountOfSnowMelt(ID, datetime, location, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: cm, mm
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'snow_melt_' + interval + ":" + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AmountOfSnowMelt(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAmountOfFreshSnow(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'fresh_snow_' + interval + ':cm' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AmountOfFreshSnow(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getSnowDepth(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'snow_depth:cm' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().SnowDepth(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getGeopotentialHeight(ID, datetime, location, level, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available levels: 1000hPa, 950hPa, 925hPa, 900hPa, 850hPa, 800hPa, 700hPa, 500hPa, 300hPa
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'geopotential_height_' + level + ':m' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().GeopotentialHeight(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getClearSkyRadiationInstantaneousFlux(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'clear_sky_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().ClearSkyRadiationInstantaneousFlux(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getClearSkyRadiationAccumulatedEnergy(ID, datetime, location, interval, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available intervals: 1h, 3h, 6h, 12h, 24h
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'clear_sky_energy_' + interval + ':J/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().ClearSkyRadiationAccumulatedEnergy(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getDiffuseRadiationInstantaneousFlux(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'diffuse_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().DiffuseRadiationInstantaneousFlux(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getDirectRadiationInstantaneousFlux(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'direct_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().DirectRadiationInstantaneousFlux(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getGlobalRadiationInstantaneousFlux(ID, datetime, location, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + 'global_rad:W' + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().GlobalRadiationInstantaneousFlux(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
    getAccumulatedEnergy(ID, datetime, location, type, interval, unit, format = 'csv') {
        /*
        --- example ---
        datetime = 2019-05-28T00:00:00ZP20D:P1D
        location = 50,10
        Available type: global, direct, diffuse
        Available intervals: 1h, 3h, 6h, 12h, 24h
        Available units: Ws, Wh, J
        */
        return new Promise((resolve, reject) => {
            this.options.url = main_1.main.meteo_url + datetime + '/' + type + '_rad_' + interval + ':' + unit + '/' + location + '/' + format;
            request.get(this.options, (error, response, body) => {
                try {
                    if (response.statusCode === 200) {
                        const meteomatics = new meteomatics_1.Meteomatics().AccumulatedEnergy(body, location, ID);
                        resolve(meteomatics);
                    }
                    else
                        reject(response.statusCode);
                }
                catch (e) {
                    reject(e);
                }
                // console.log(body.data[0].coordinates[0].dates)
            });
        });
    }
}
exports.BasicWeatherParameters = BasicWeatherParameters;
//# sourceMappingURL=BasicWeatherParameters.js.map