export class Geo
{
    lat: string;
    lng: string;

    constructor(obj : Object){
       this.lat  =  obj["lat"] === undefined? "" : obj["lat"];
       this.lng  =  obj["lng"] === undefined? "" : obj["lng"];
    }
}