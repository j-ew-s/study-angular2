import{Component} from '@angular/core';
import{Router } from '@angular/router';
@Component({
    selector: 'nav-bar', 
    templateUrl: './app/components/navbar/nav-bar.component.html'
})
export class NavBarComponent{

    postActive : boolean;
    userActive : boolean;
    homeActive : boolean;

    constructor(private _router : Router){}
    onClick(){
       this._router.isActive('post',this.postActive);
       this._router.isActive('user',this.userActive);
       this._router.isActive('home',this.homeActive);
    }
}