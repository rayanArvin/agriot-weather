export class soilPersonal {
    private SoilPersonal:any = {};
    public currentSoil(body){
        body = JSON.parse(body);
        this.SoilPersonal.api = "agromonitoring";
        this.SoilPersonal.dt = body.dt;
        this.SoilPersonal.t10 = + Math.round(body.t10 - 273);
        this.SoilPersonal.t0 = + Math.round(body.t0 - 273);
        this.SoilPersonal.moisture = body.moisture;
        return this.SoilPersonal;
    }
}