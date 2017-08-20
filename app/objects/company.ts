export class Company{
    name: string;
    catchPhrase: string;
    bs: string;

    constructor(obj: Object){
        this.name           = obj["name"] === undefined ? "": obj["name"], 
        this.catchPhrase    = obj["catchPhrase"] === undefined ? "": obj["catchPhrase"];
        this.bs             = obj["bs"] === undefined ? "": obj["bs"];
    }
}