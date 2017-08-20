
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { HomeComponent } from './home.component';
import { PostComponent } from '../../../app/components/post/post.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
    
}