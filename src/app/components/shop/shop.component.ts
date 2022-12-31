import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  public shoppingCartItems: IProduct[] = [];
  constructor() {}

  handleAddToCart(product: IProduct) {
    this.shoppingCartItems.push(product);
    console.log('Added to cart');
  }
}
