"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var router_1 = require('@angular/router');
var address_form_component_1 = require('./../../../../app/components/address/form/address-form.component');
var emailValidator_1 = require('./../../../../app/shared/validators/emailValidator');
var user_1 = require('./../../../../app/objects/user');
var user_service_1 = require('./../user.service');
var UserFormComponent = (function () {
    function UserFormComponent(_fb, _service, router, route) {
        this._fb = _fb;
        this._service = _service;
        this.router = router;
        this.route = route;
        this.isSaveMethod = false;
        this.form = this._fb.group({
            name: ['', forms_2.Validators.required],
            email: ['', forms_2.Validators.compose([forms_2.Validators.required, emailValidator_1.EmailValidator.shouldBeValid])],
            phone: [''],
            address: this._fb.array([])
        });
        this.item = new user_1.User(new Object);
    }
    UserFormComponent.prototype.isFormDirty = function () {
        return this.form.dirty;
    };
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params['id'];
        if (this.userId !== undefined)
            this._service.getUserById(this.userId).subscribe(function (s) {
                return _this.item = new user_1.User(s);
            });
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSaveMethod = true;
        if (this.item.id <= 0) {
            this._service.postUser(this.item).subscribe(function (s) {
                _this.router.navigateByUrl('user'),
                    console.log("created ", s);
            }, function (e) {
                console.log("error ", e);
            });
        }
        else {
            this._service.putUser(this.item).subscribe(function (s) {
                _this.router.navigateByUrl('user'),
                    console.log("updated ", s);
            }, function (e) {
                console.log("error ", e);
            });
        }
    };
    __decorate([
        core_1.ViewChild(address_form_component_1.AddressFormComponent), 
        __metadata('design:type', Object)
    ], UserFormComponent.prototype, "addressView", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: './app/components/user/form/user-form.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_2.FormBuilder, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map