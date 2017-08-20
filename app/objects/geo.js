"use strict";
var Geo = (function () {
    function Geo(obj) {
        this.lat = obj["lat"] === undefined ? "" : obj["lat"];
        this.lng = obj["lng"] === undefined ? "" : obj["lng"];
    }
    return Geo;
}());
exports.Geo = Geo;
//# sourceMappingURL=geo.js.map