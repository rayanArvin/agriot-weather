"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_1 = require("../library/csv");
class Meteomatics {
    constructor() {
        this.Meteomatics = {};
        this.SP = 'meteomatics';
    }
    GDD(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ET(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    GLTS(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    LW(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PHN(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
}
exports.Meteomatics = Meteomatics;
//# sourceMappingURL=meteomatics.js.map