
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { UserService }  from './user.service';
import { UserComponent } from './user.component';
import { UserFormComponent } from '../user/form/user-form.component'

import { AddressModule } from '../address/address.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        AddressModule
    ],
    declarations: [
        UserComponent, UserFormComponent
    ],
    exports: [
        UserComponent, UserFormComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {
    
}