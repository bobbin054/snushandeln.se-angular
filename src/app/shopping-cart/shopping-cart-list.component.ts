import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../products/product";
import { ProductService } from "../products/product.service";

@Component({
    templateUrl: 'shopping-cart-list.component.html',
    styleUrls: ['shopping-cart-list.component.css']
})
export class ShoppingCartListComponent {
    constructor() {
    }


}