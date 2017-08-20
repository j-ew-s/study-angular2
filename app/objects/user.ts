import {Company} from './Company';
import {Address} from './address';

export class User {

    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public website: string;
    public address: Address;
    public company: Company;

    constructor(object : Object){

        this.id      = object["id"] === undefined? "": object["id"];
        this.name    = object["name"] === undefined? "": object["name"];
        this.email   = object["email"] === undefined? "": object["email"];
        this.phone   = object["phone"] === undefined? "": object["phone"];
        this.website = object["website"] === undefined? "": object["website"];
        this.address = object["address"] === undefined ? new Address(new Object):new Address(object["address"]);
        this.company =object["company"] === undefined ? new Company(new Object) :  new Company(object["company"]);

    }

}