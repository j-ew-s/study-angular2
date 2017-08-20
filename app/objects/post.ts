
export class Post {

    public id: number;
    public title: string;
    public body: string;
    public userId: string;
    public userName: string;
   
    constructor(object : Object){
        this.id     = object["id"] === undefined? "": object["id"];
        this.title  = object["title"] === undefined? "": object["title"];
        this.body   = object["body"] === undefined? "": object["body"];
        this.userId = object["userId"] === undefined? "": object["userId"];
        this.userName = object["userName"] === undefined? "": object["userName"];
     }

}