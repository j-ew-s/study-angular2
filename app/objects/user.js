"use strict";
var Company_1 = require('./Company');
var address_1 = require('./address');
var User = (function () {
    function User(object) {
        this.id = object["id"] === undefined ? "" : object["id"];
        this.name = object["name"] === undefined ? "" : object["name"];
        this.email = object["email"] === undefined ? "" : object["email"];
        this.phone = object["phone"] === undefined ? "" : object["phone"];
        this.website = object["website"] === undefined ? "" : object["website"];
        this.address = object["address"] === undefined ? new address_1.Address(new Object) : new address_1.Address(object["address"]);
        this.company = object["company"] === undefined ? new Company_1.Company(new Object) : new Company_1.Company(object["company"]);
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map