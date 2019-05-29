import {csv} from "../library/csv";

export class Meteomatics {
    private Meteomatics: any = {};
    private SP = 'meteomatics';
    public GDD(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public ET(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public GLTS(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public LW(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public PHN(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
}