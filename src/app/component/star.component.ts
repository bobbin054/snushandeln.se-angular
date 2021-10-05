import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: '../view/star.component.html',
    styleUrls: ['../css/star.component.css']
})

export class StarComponent implements OnChanges
{

    @Input() rating: number = 0;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    cropWidth: number = 75;

    ngOnChanges(): void
    {
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(): void
    {
        this.ratingClicked.emit(this.rating.toString());
    }
}