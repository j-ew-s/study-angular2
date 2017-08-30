import {Component, ViewChildren} from '@angular/core';
@Component({
    selector: 'history', 
    templateUrl: './app/components/history/history.component.html',
})
export class HistoryComponent {
    public title :string = "Tiiiitle";
    public message :string = "MEESAGE";
    public action : string = "thumbs-o-up"
}