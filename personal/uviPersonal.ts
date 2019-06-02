export class uviPersonal {
    private UVIPersonal: any = {};
    public currentUVI(body , polyId){
        body = JSON.parse(body);
        this.UVIPersonal.api = 'agromonitoring';
        this.UVIPersonal.polygonID = polyId;
        this.UVIPersonal.dt = body.dt;
        this.UVIPersonal.uvi = body.uvi;
        return this.UVIPersonal;
    };
}