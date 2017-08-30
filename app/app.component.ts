import { Component } from '@angular/core';
import { NavBarComponent } from '../app/components/navbar/nav-bar.component';

@Component({
    selector: 'my-app',
    template: `<nav-bar> </nav-bar>
               <div  class="container">
                    
                        <router-outlet> </router-outlet> 
                   
               </div>  
               `,
    directives: [NavBarComponent]
})
export class AppComponent {

}