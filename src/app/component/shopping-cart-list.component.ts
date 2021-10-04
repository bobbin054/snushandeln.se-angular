import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "../interface/product";
import { ProductService } from "../product.service";

@Component({
    templateUrl: '../view/shopping-cart-list.component.html',
    styleUrls: ['../css/shopping-cart-list.component.css']
})
export class ShoppingCartListComponent {
    constructor() {
    }


}