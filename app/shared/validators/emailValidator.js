"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.shouldBeValid = function (control) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!pattern.test(control.value)) {
            return { shouldBeValid: true };
        }
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=emailValidator.js.map