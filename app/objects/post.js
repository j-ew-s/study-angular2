"use strict";
var Post = (function () {
    function Post(object) {
        this.id = object["id"] === undefined ? "" : object["id"];
        this.title = object["title"] === undefined ? "" : object["title"];
        this.body = object["body"] === undefined ? "" : object["body"];
        this.userId = object["userId"] === undefined ? "" : object["userId"];
        this.userName = object["userName"] === undefined ? "" : object["userName"];
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map