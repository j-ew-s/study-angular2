"use strict";
var PreventUnsavedChanges = (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        console.log("Component", component);
        if (component.isFormDirty() && !component.isSaveMethod) {
            return confirm("Do you want to lose your changes?");
        }
        else
            return true;
    };
    return PreventUnsavedChanges;
}());
exports.PreventUnsavedChanges = PreventUnsavedChanges;
//# sourceMappingURL=prevent-unsaved-changes.service.js.map