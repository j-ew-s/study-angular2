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
var AddressFormComponent = (function () {
    function AddressFormComponent(_fb, cdr) {
        this._fb = _fb;
        this.cdr = cdr;
        this.addressForm = this._fb.group({
            suite: [''],
            street: [''],
            zipcode: ['', forms_2.Validators.required],
            city: ['']
        });
    }
    AddressFormComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    AddressFormComponent.prototype.ngOnChanges = function () {
        if (this.inputModel["address"] !== undefined) {
            this.item = this.inputModel["address"];
        }
        if (this.group != null && this.group.controls["address"].controls.length <= 0) {
            var group = this.group.controls["address"];
            group.push(this.addressForm);
        }
        this.cdr.detectChanges();
    };
    AddressFormComponent.prototype.ngOnInit = function () {
        if (this.inputModel["address"] !== undefined) {
            this.item = this.inputModel["address"];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddressFormComponent.prototype, "inputModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddressFormComponent.prototype, "group", void 0);
    AddressFormComponent = __decorate([
        core_1.Component({
            selector: 'address-form',
            templateUrl: './app/components/address/form/address-form.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_2.FormBuilder, core_1.ChangeDetectorRef])
    ], AddressFormComponent);
    return AddressFormComponent;
}());
exports.AddressFormComponent = AddressFormComponent;
//# sourceMappingURL=address-form.component.js.map