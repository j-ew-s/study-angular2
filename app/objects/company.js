"use strict";
var Company = (function () {
    function Company(obj) {
        this.name = obj["name"] === undefined ? "" : obj["name"],
            this.catchPhrase = obj["catchPhrase"] === undefined ? "" : obj["catchPhrase"];
        this.bs = obj["bs"] === undefined ? "" : obj["bs"];
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map