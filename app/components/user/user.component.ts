import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {Router} from '@angular/router';

import { UserService } from './user.service';
import { User } from '../../../app/objects/user';


@Component({
    selector: 'user',
    templateUrl: './app/components/user/user.component.html',
    providers: [UserService, HTTP_PROVIDERS]
})
export class UserComponent implements OnInit {

    public user: User[] = [];
    
    constructor(private _service: UserService, private router: Router) { }
    
    ngOnInit() {
       
        this._service
            .getAllUsers()
            .subscribe(s => {
                for (let item of s) {
                    this.user.push(item);
                }
                
            });
    }

    redirectForm(){
        this.router.navigateByUrl('user/form');
    }

}