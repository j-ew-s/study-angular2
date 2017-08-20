import {Geo}  from './geo';

export class Address{
    street : string;
    suite : string;
    city: string;
    zipcode: string;
    geo: Geo;

    constructor(obj : Object){
          this.street     =  obj["street"] === undefined? "" : obj["street"];
          this.suite      =  obj["suite"] === undefined? "" : obj["suite"];
          this.city       =  obj["city"] === undefined? "" : obj["city"];
          this.zipcode    =  obj["zipcode"] === undefined? "" : obj["zipcode"];
          this.geo        =  obj["geo"] === undefined?  new Geo(new Object) : new Geo(obj["geo"]); 
         
    }
}