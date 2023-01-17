import { Component } from '@angular/core';
import { IProductInCart } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'pm-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent {
  public productsInCart: IProductInCart[] = [];

  constructor(public shopService: CartService) {
    this.shopService.productsInCart$.subscribe((products) => {
      this.productsInCart = products;
    });
    this.shopService.countTotalQuantity();
  }
}
