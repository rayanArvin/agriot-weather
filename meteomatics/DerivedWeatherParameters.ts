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
}