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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('../../app/app.component');
var not_found_component_1 = require('./../../app/not-found.component');
var address_module_1 = require('../../app/components/address/address.module');
var home_module_1 = require('../../app/components/home/home.module');
var history_module_1 = require('../../app/components/history/history.module');
var user_module_1 = require('../../app/components/user/user.module');
var post_module_1 = require('../../app/components/post/post.module');
var prevent_unsaved_changes_service_1 = require('../shared/routeAccess/prevent-unsaved-changes.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                address_module_1.AddressModule,
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                home_module_1.HomeModule,
                history_module_1.HistoryModule,
                http_1.HttpModule,
                user_module_1.UserModule,
                post_module_1.PostModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                not_found_component_1.NotFoundComponent
            ],
            providers: [
                prevent_unsaved_changes_service_1.PreventUnsavedChanges
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map