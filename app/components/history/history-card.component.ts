import { Component, ViewChildren, Input, OnInit } from '@angular/core';
import { HistoryCard } from '../../objects/historyCard';

@Component({
    selector: 'history-card',
    templateUrl: './app/components/history/history-card.component.html',
})
export class HistoryCardComponent implements OnInit {

    public warnning: boolean = false;
    public saved: boolean = false;
    public deleted: boolean = false;
    public default: boolean = false;

    @Input() historyCard: HistoryCard;

    constructor() { }

    ngOnInit(): void {
        
    }

    getActionIcon(): string{
        let cssClass :string = "glyphicon-bookmark";
        if(this.historyCard.action == 'success'){ cssClass = "glyphicon-ok"   }
        else if(this.historyCard.action == 'trash'){ cssClass = "glyphicon-trash"}
        else if(this.historyCard.action == 'warning'){ cssClass ="glyphicon-warning"}
        return cssClass;
    }

}