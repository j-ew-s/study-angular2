import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }       from '../../app/app.component';
import { HomeComponent }      from '../../app/components/home/home.component';
import { NotFoundComponent }  from './../../app/not-found.component';

import { AddressModule } from '../../app/components/address/address.module';
import { HomeModule }   from '../../app/components/home/home.module';
import { UserModule }   from '../../app/components/user/user.module';
import { PostModule }   from '../../app/components/post/post.module';

import {PreventUnsavedChanges} from '../shared/routeAccess/prevent-unsaved-changes.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    AddressModule, 
    BrowserModule,
    CommonModule,
    HomeModule,
    HttpModule,
    UserModule,
    PostModule,
    routing
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers:[
    PreventUnsavedChanges
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }