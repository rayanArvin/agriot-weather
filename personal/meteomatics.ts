export class Meteomatics {
    private Meteomatics: any = {};
    private SP = 'meteomatics';
    public GDD(body){
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataParameter = body.data[0].parameter;
        this.Meteomatics.dataCoordinatesLat = body.data[0].coordinates[0].lat;
        this.Meteomatics.dataCoordinatesLon = body.data[0].coordinates[0].lon;
        this.Meteomatics.dataCoordinatesDatesValue = body.data[0].coordinates[0].dates[0].value;
        this.Meteomatics.dataCoordinatesDatesDate = body.data[0].coordinates[0].dates[0];
        return this.Meteomatics;
    }

    public ET(body){
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataParameter = body.data[0].parameter;
        this.Meteomatics.dataCoordinatesAll = body.data[0].coordinates;
        return this.Meteomatics;
    }

    public GLTS(body){
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataParameter = body.data[0].parameter;
        this.Meteomatics.dataCoordinatesAll = body.data[0].coordinates;
        return this.Meteomatics;
    }

    public LW(body){
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataParameter = body.data[0].parameter;
        this.Meteomatics.dataCoordinatesAll = body.data[0].coordinates;
        return this.Meteomatics;
    }

    public PHN(body){
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataParameter = body.data[0].parameter;
        this.Meteomatics.dataCoordinatesAll = body.data[0].coordinates;
        return this.Meteomatics;
    }
}