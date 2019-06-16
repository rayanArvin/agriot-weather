import {csv} from "../library/csv";

export class Meteomatics {
    private Meteomatics: any = {};
    private SP = 'meteomatics';

    /* Agricultural Parameters */

    public GDD(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public ET(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public GLTS(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public LW(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public PHN(body, location){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    /*  Derived Weather Parameters */

    public WeatherSymbol(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public WeatherCode(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public WeatherText(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Visibility(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public DewOrRime(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Rainfall(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Sleet(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Snowfall(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Fog(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Frost(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public Windchill(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public WetBulbTemperature(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public IcingPotential(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public SlipperyRoad(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public PlanetaryBoundaryLayerHeight(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public SnowLine(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public FreezingLevel(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public SPV(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public PowerLineOscillatiOnWarning(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public BiseIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public FoehnIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public MoehlinJetIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public NorthAtlanticOscillationIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public SouthernOscillationIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public ForestFireIndexByKaese(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public FosbergFireWeatherIndex(body, location , ID){
        body = csv.csv2array(body,';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }

    public DroughtIndex(body, location , ID){
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