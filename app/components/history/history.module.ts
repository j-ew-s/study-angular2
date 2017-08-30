
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { HistoryComponent } from './history.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
    ],
    declarations: [
        HistoryComponent
    ],
    exports: [
        HistoryComponent
    ]
})
export class HistoryModule {
    
}