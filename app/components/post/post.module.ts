
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './post.component';
import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        PostComponent
    ],
    exports: [
        PostComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule {
}