import {Component, ViewChildren} from '@angular/core';
import {HistoryCardComponent} from './history-card.component'
@Component({
    selector: 'history', 
    templateUrl: './app/components/history/history.component.html',
})
export class HistoryComponent {

    @ViewChildren(HistoryCardComponent) historyCard;

    public title :string = "Tiiiitle";
    public message :string = "MEESAGE";
    public action : string = "thumbs-o-up"

    constructor(){}


}