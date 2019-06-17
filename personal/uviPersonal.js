"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class uviPersonal {
    constructor() {
        this.UVIPersonal = {};
    }
    currentUVI(body, polyId) {
        body = JSON.parse(body);
        this.UVIPersonal.api = 'agromonitoring';
        this.UVIPersonal.polygonID = polyId;
        this.UVIPersonal.dt = body.dt;
        this.UVIPersonal.uvi = body.uvi;
        return this.UVIPersonal;
    }
    ;
}
exports.uviPersonal = uviPersonal;
//# sourceMappingURL=uviPersonal.js.map