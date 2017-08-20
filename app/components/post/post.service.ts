
import {Http, HttpModule} from '@angular/http'
import {Injectable} from '@angular/core'

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

import { Post } from '../../../app/objects/post'


@Injectable()
export class PostService{

    constructor(private _http : Http){}

    getAllPosts(): Observable<Post[]>{
        return this._http.get("https://jsonplaceholder.typicode.com/posts")
        .map(result => result.json())
        
    }

    getPostById(postId: string){
        return this._http.get("https://jsonplaceholder.typicode.com/posts/"+ postId)
        .map(response => response.json());
    }
}