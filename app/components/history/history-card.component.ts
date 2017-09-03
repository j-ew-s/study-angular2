import { Component, ViewChildren, Input } from '@angular/core';
import { HistoryCard } from '../../objects/historyCard';

@Component({
    selector: 'history-card',
    templateUrl: './app/components/history/history-card.component.html',
})
export class HistoryCardComponent {

    @Input() historyCard: HistoryCard;
    @Input() first: boolean = false;
    @Input() last: boolean = false;

    constructor() { }

    getActionIcon(): string {
        let cssClass: string = "glyphicon-bookmark";
        if (this.historyCard.action == 'done') { cssClass = "glyphicon-ok" }
        else if (this.historyCard.action == 'trash') { cssClass = "glyphicon-trash" }
        return cssClass;
    }

}