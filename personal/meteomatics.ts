import {csv} from "../library/csv";

export class Meteomatics {
    private Meteomatics: any = {};
    private SP = 'meteomatics';

    public MeteoMatics(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
}