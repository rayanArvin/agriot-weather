"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class soilPersonal {
    constructor() {
        this.SoilPersonal = {};
    }
    currentSoil(body, polyId) {
        body = JSON.parse(body);
        this.SoilPersonal.api = "agromonitoring";
        this.SoilPersonal.polygonID = polyId;
        this.SoilPersonal.dt = body.dt;
        this.SoilPersonal.t10 = Math.round(+body.t10 - 273);
        this.SoilPersonal.t0 = Math.round(+body.t0 - 273);
        this.SoilPersonal.moisture = body.moisture;
        return this.SoilPersonal;
    }
}
exports.soilPersonal = soilPersonal;
//# sourceMappingURL=soilPersonal.js.map