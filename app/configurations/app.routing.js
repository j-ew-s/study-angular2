"use strict";
var router_1 = require('@angular/router');
var prevent_unsaved_changes_service_1 = require('../shared/routeAccess/prevent-unsaved-changes.service');
var home_component_1 = require('../../app/components/home/home.component');
var user_component_1 = require('../../app/components/user/user.component');
var user_form_component_1 = require('../../app/components/user/form/user-form.component');
var post_component_1 = require('../../app/components/post/post.component');
var not_found_component_1 = require('../../app/not-found.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    {
        path: 'user/form',
        component: user_form_component_1.UserFormComponent,
        canDeactivate: [prevent_unsaved_changes_service_1.PreventUnsavedChanges]
    },
    {
        path: 'user/form/:id',
        component: user_form_component_1.UserFormComponent,
        canDeactivate: [prevent_unsaved_changes_service_1.PreventUnsavedChanges]
    },
    { path: 'post', component: post_component_1.PostComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map