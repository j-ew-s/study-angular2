
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AddressFormComponent } from '../address/form/address-form.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
    ],
    declarations: [
        AddressFormComponent
    ],
    exports: [
         AddressFormComponent
    ]
})
export class AddressModule {
    
}