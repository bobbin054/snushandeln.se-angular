import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { IProduct } from "../interface/product";

@Component({
    selector: 'add-to-cart',
    templateUrl: './add-to-cart.component.html'
})

export class AddToCartComponent
{
    @Input() productToAdd!: IProduct;
    @Output() addToCartClicked: EventEmitter<IProduct> = new EventEmitter<IProduct>();

    onClick(): void
    {
        this.addToCartClicked.emit(this.productToAdd);
    }
}
