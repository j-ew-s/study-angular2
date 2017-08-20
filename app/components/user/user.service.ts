
import {Http, HttpModule} from '@angular/http'
import {Injectable} from '@angular/core'

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

import {User} from '../../../app/objects/user'


@Injectable()
export class UserService{

    constructor(private _http : Http){}

    getAllUsers(): Observable<User[]>{
        return this._http.get("https://jsonplaceholder.typicode.com/users")
        .map(result => result.json())
        
    }

    getUserById(userId: string){
        return this._http.get("https://jsonplaceholder.typicode.com/users/"+ userId)
        .map(response => response.json());
    }

    postUser(user: User){
        return this._http.post("https://jsonplaceholder.typicode.com/users", JSON.stringify(user))
        .map(response => response.json());
    }    
    
    putUser(user: User){
        return this._http.put("https://jsonplaceholder.typicode.com/users", JSON.stringify(user))
        .map(response => response.json());
    }

}