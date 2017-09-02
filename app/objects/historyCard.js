"use strict";
var user_1 = require('./user');
var HistoryCard = (function () {
    function HistoryCard(obj) {
        this.title = obj["title"] === undefined ? "" : obj["title"];
        this.message = obj["message"] === undefined ? "" : obj["message"];
        this.date = obj["date"] === undefined ? "" : obj["date"];
        this.action = obj["action"] === undefined ? "" : obj["action"];
        this.user = obj["user"] === undefined ? new user_1.User(new Object) : new user_1.User(obj["user"]);
    }
    return HistoryCard;
}());
exports.HistoryCard = HistoryCard;
//# sourceMappingURL=historyCard.js.map