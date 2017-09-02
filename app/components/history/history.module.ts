
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { HistoryComponent } from './history.component';
import { HistoryCardComponent } from './history-card.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
    ],
    declarations: [
        HistoryComponent,
        HistoryCardComponent
    ],
    exports: [
        HistoryComponent,
        HistoryCardComponent
    ]
})
export class HistoryModule {
    
}