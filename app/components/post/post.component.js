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
var post_service_1 = require('./post.service');
var user_service_1 = require('../../../app/components/user/user.service');
var post_1 = require('../../../app/objects/post');
var user_1 = require('../../../app/objects/user');
var PostComponent = (function () {
    function PostComponent(_service, _serviceUser) {
        this._service = _service;
        this._serviceUser = _serviceUser;
        this.posts = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service
            .getAllPosts()
            .subscribe(function (s) {
            var _loop_1 = function(item) {
                var user;
                _this._serviceUser.getUserById(item.userId).subscribe(function (s) {
                    user = new user_1.User(s);
                    item.userName = user.name;
                    _this.posts.push(new post_1.Post(item));
                });
            };
            for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
                var item = s_1[_i];
                _loop_1(item);
            }
        });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: './app/components/post/post.component.html'
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map