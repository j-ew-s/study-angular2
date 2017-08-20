import { Component, OnInit,OnChanges,  Input, Output, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormArray } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators,  } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router'

import { Address } from './../../../../app/objects/address'

@Component({
    selector: 'address-form',
    templateUrl: './app/components/address/form/address-form.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class AddressFormComponent implements OnInit, OnChanges {

   @Input() inputModel: any;
   @Input() group;

   public item: Address;
   public addressForm :FormGroup;
  
   constructor(private _fb: FormBuilder, private cdr: ChangeDetectorRef){
        this.addressForm = this._fb.group({
            suite:    [''],
            street:   [''],
            zipcode:  ['', Validators.required], 
            city:     [''] 
        });
   } 

   ngAfterViewInit() {
        this.cdr.detectChanges();
  }

   ngOnChanges(){
        if(this.inputModel["address"] !== undefined){
            this.item = this.inputModel["address"];
        } 
         if(this.group != null  && this.group.controls["address"].controls.length <=0 ){
            let group = <FormArray>this.group.controls["address"];
            group.push(this.addressForm);
        } 
        this.cdr.detectChanges();
   }

   ngOnInit(){
        if(this.inputModel["address"] !== undefined){
            this.item = this.inputModel["address"];
        }      
   }
}
