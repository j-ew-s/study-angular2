import {User} from './user'

export class HistoryCard{
    title : string;
    message : string;
    date : string;
    user : User;
    action: string;

    constructor(obj : Object){
          this.title   = obj["title"] === undefined? "" : obj["title"];
          this.message = obj["message"] === undefined? "" : obj["message"];
          this.date    = obj["date"] === undefined? "" : obj["date"];
          this.action  = obj["action"] === undefined? "" : obj["action"];
          this.user    = obj["user"] === undefined?  new User(new Object) : new User(obj["user"]); 
    }
}