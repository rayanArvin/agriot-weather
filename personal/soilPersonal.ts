export class soilPersonal {
    private SoilPersonal:any = {};
    public currentSoil(body){
        body = JSON.parse(body);
        this.SoilPersonal.api = "agromonitoring";
        this.SoilPersonal.dt = body.dt;
        this.SoilPersonal.t10 = body.t10;
        this.SoilPersonal.t0 = body.t0;
        this.SoilPersonal.moisture = body.moisture;
        return this.SoilPersonal;
    }
}