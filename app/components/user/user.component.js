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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.user = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service
            .getAllUsers()
            .subscribe(function (s) {
            for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
                var item = s_1[_i];
                _this.user.push(item);
            }
        });
    };
    UserComponent.prototype.redirectForm = function () {
        this.router.navigateByUrl('user/form');
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: './app/components/user/user.component.html',
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map