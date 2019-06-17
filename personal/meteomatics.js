"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_1 = require("../library/csv");
class Meteomatics {
    constructor() {
        this.Meteomatics = {};
        this.SP = 'meteomatics';
    }
    /////////////////////////////////////////////////////
    /* ------------Agricultural Parameters------------ */
    /////////////////////////////////////////////////////
    GDD(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ET(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    GLTS(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    LW(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PHN(body, location) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    /////////////////////////////////////////////////////////
    /*  ------------Derived Weather Parameters------------ */
    /////////////////////////////////////////////////////////
    WeatherSymbol(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    WeatherCode(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    WeatherText(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Visibility(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    DewOrRime(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Rainfall(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Sleet(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Snowfall(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Fog(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Frost(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Windchill(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ApparentTemperature(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    WetBulbTemperature(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    IcingPotential(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SlipperyRoad(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PlanetaryBoundaryLayerHeight(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SnowLine(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    FreezingLevel(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SPV(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PowerLineOscillatiOnWarning(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    BiseIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    FoehnIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    MoehlinJetIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SantaAnaWindIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    NorthAtlanticOscillationIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SouthernOscillationIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ForestFireIndexByKaese(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    FosbergFireWeatherIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    DroughtIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    //////////////////////////////////////////////////////
    /* ------------Basic Weather Parameters------------ */
    //////////////////////////////////////////////////////
    ImmediateTemperature(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    IntervalValuesOfTheTemperature(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    RelativeHumidity(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AbsoluteHumidity(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    InstantaneousDewPoint(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PressureAdjustedToSeaLevel(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SurfacePressure(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SurfacePressureMean(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PressureAtHigherAltitudes(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    MeanPressureAtHigherAltitudes(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AtmosphericDensity(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    InstantaneousWindSpeed(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    InstantaneousWindDirection(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    WindSpeedU(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    WindSpeedV(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    IntervalWindSpeed(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    IntervalWindGusts(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    IntervalWindDirection(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AmountOfCloudCover(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AccumulatedPrecipitation(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PrecipitationType(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PrecipitationLayer5Min(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    PrecipitationProbability(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    Hail(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    HailInterval(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AccumulatedEvaporation(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    CAPE(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    LiftedIndex(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ThunderstormProbabilities(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    FrostDepth(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AmountOfSnowMelt(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AmountOfFreshSnow(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    SnowDepth(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    GeopotentialHeight(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ClearSkyRadiationInstantaneousFlux(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    ClearSkyRadiationAccumulatedEnergy(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    DiffuseRadiationInstantaneousFlux(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    DirectRadiationInstantaneousFlux(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    GlobalRadiationInstantaneousFlux(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
    AccumulatedEnergy(body, location, ID) {
        body = csv_1.csv.csv2array(body, ';');
        this.Meteomatics.api = this.SP;
        this.Meteomatics.polygonID = ID;
        this.Meteomatics.dataCoordinates = location;
        this.Meteomatics.dataParameter = body[0][1];
        body.shift();
        this.Meteomatics.allData = body;
        return this.Meteomatics;
    }
}
exports.Meteomatics = Meteomatics;
//# sourceMappingURL=meteomatics.js.map