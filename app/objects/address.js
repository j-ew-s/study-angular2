"use strict";
var geo_1 = require('./geo');
var Address = (function () {
    function Address(obj) {
        this.street = obj["street"] === undefined ? "" : obj["street"];
        this.suite = obj["suite"] === undefined ? "" : obj["suite"];
        this.city = obj["city"] === undefined ? "" : obj["city"];
        this.zipcode = obj["zipcode"] === undefined ? "" : obj["zipcode"];
        this.geo = obj["geo"] === undefined ? new geo_1.Geo(new Object) : new geo_1.Geo(obj["geo"]);
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map