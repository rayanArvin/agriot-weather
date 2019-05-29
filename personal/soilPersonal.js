"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class soilPersonal {
    constructor() {
        this.SoilPersonal = {};
    }
    currentSoil(body) {
        body = JSON.parse(body);
        this.SoilPersonal.api = "agromonitoring";
        this.SoilPersonal.dt = +body.dt - 273;
        this.SoilPersonal.t10 = body.t10;
        this.SoilPersonal.t0 = +body.t0 - 273;
        this.SoilPersonal.moisture = body.moisture;
        return this.SoilPersonal;
    }
}
exports.soilPersonal = soilPersonal;
//# sourceMappingURL=soilPersonal.js.map