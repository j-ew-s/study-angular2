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
var history_card_component_1 = require('./history-card.component');
var historyCard_1 = require('../../objects/historyCard');
var HistoryComponent = (function () {
    function HistoryComponent() {
        this.items = [];
        var objectList = [{
                "title": "Adding a new component",
                "message": "Added a new component to app. Need to import it to older features.",
                "date": "12/12/12",
                "action": "done",
                "user": ""
            },
            {
                "title": "There is no validation on user form",
                "message": "It is important to implement validations. ",
                "date": "11/12/12",
                "action": "done",
                "user": ""
            },
            {
                "title": "Removed all comments from user page",
                "message": "All the comments are removed.No need for it anymore.",
                "date": "11/12/12",
                "action": "trash",
                "user": ""
            },
            {
                "title": "Its a default message",
                "message": "It should not have any influence on app behavior, but was registered.",
                "date": "10/12/12",
                "action": "default",
                "user": ""
            },
            {
                "title": "History card created",
                "message": "This feature were implemented due a CSS charge I made to myself. ",
                "date": "10/12/12",
                "action": "done",
                "user": ""
            }];
        for (var _i = 0, objectList_1 = objectList; _i < objectList_1.length; _i++) {
            var card = objectList_1[_i];
            this.items.push(new historyCard_1.HistoryCard(card));
        }
    }
    ;
    __decorate([
        core_1.ViewChildren(history_card_component_1.HistoryCardComponent), 
        __metadata('design:type', Object)
    ], HistoryComponent.prototype, "historyCard", void 0);
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'history',
            templateUrl: './app/components/history/history.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map