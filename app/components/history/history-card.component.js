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
var historyCard_1 = require('../../objects/historyCard');
var HistoryCardComponent = (function () {
    function HistoryCardComponent() {
        this.first = false;
        this.last = false;
    }
    HistoryCardComponent.prototype.getActionIcon = function () {
        var cssClass = "glyphicon-bookmark";
        if (this.historyCard.action == 'done') {
            cssClass = "glyphicon-ok";
        }
        else if (this.historyCard.action == 'trash') {
            cssClass = "glyphicon-trash";
        }
        return cssClass;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', historyCard_1.HistoryCard)
    ], HistoryCardComponent.prototype, "historyCard", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], HistoryCardComponent.prototype, "first", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], HistoryCardComponent.prototype, "last", void 0);
    HistoryCardComponent = __decorate([
        core_1.Component({
            selector: 'history-card',
            templateUrl: './app/components/history/history-card.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryCardComponent);
    return HistoryCardComponent;
}());
exports.HistoryCardComponent = HistoryCardComponent;
//# sourceMappingURL=history-card.component.js.map