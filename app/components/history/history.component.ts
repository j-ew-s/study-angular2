import { Component, ViewChildren } from '@angular/core';
import { HistoryCardComponent } from './history-card.component'
import { HistoryCard } from '../../objects/historyCard'
@Component({
    selector: 'history',
    templateUrl: './app/components/history/history.component.html',
})
export class HistoryComponent {

    @ViewChildren(HistoryCardComponent) historyCard;

    public items: any[] = [];

    constructor() {

        let objectList = [{
            "title": "Adding a new component",
            "message": "Added a new component to app. Need to import it to older features.",
            "date": "12/12/12",
            "action": "success",
            "user": ""
        },
        {
            "title": "There is no validation on user form",
            "message": "It is important to implement validations. ",
            "date": "11/12/12",
            "action": "warning",
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
            "action": "success",
            "user": ""
        }];

        for (let card of objectList) {
            this.items.push(new HistoryCard(card));
        }
    };
}