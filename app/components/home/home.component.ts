import {Component, ViewChildren} from '@angular/core';

import { PostComponent } from '../../../app/components/post/post.component'

@Component({
    selector: 'home', 
    templateUrl: './app/components/home/home.component.html',
})
export class HomeComponent{

    public currentImage: number = 1;
    public imgPath:string;

    constructor(){
        this.getNewImage();
    }

    getNewImage(){
        if(this.currentImage == 3)
        {
            this.currentImage = 0;
        }
        this.currentImage++;
        this.imgPath = "/assets/images/"+ this.currentImage + ".jpg";
    }
}