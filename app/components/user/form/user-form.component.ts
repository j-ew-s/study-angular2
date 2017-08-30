import { Component, OnInit, ViewChild } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { AddressFormComponent } from './../../../../app/components/address/form/address-form.component'
import { BaseController } from './../../../../app/shared/baseController/base-controller.interface';
import { EmailValidator } from './../../../../app/shared/validators/emailValidator'
import { User } from './../../../../app/objects/user'
import { UserService } from './../user.service'

@Component({
    selector: 'user-form',
    templateUrl: './app/components/user/form/user-form.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class UserFormComponent implements BaseController, OnInit {

    public isSaveMethod = false;
    public form: FormGroup;
    public item: User;
    public userId: string;
    public isLoading: boolean = false;

    public messageStyle : string;
    public message: string;

    @ViewChild(AddressFormComponent) addressView;

    constructor(private _fb: FormBuilder, private _service: UserService, private router: Router,
        private route: ActivatedRoute) {

        this.form = this._fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.shouldBeValid])],
            phone: [''],
            address: this._fb.array([])
        });

        this.item = new User(new Object);
    }

    isFormDirty() {
        return this.form.dirty;
    }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        if (this.userId !== undefined) {
            this.isLoading = true;
            this._service.getUserById(this.userId).subscribe(
                s => {
                    this.item = new User(s);
                    this.isLoading = false;
                }, e => {
                    this.isLoading = false;
                }
            );
        }
    }

    sendMessage(success:boolean){
        this.messageStyle = success ? 'success': 'error';
        this.message = success ? 'Item saved!' : 'Ouch! An error happens during your action. Please get in touch with the Admin.'
    }

    onSubmit() {
        this.isSaveMethod = true;
        if (this.item.id <= 0) {
            this._service.postUser(this.item).subscribe(
                s => {
                    this.router.navigateByUrl('user'),
                        console.log("created ", s)
                },
                e => {
                    console.log("error ", e)
                }
            );
        }
        else {
            this._service.putUser(this.item).subscribe(
                s => {
                    this.router.navigateByUrl('user'),
                        console.log("updated ", s)
                },
                e => {
                    console.log("error ", e)
                }
            );
        }
    }

}
