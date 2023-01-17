import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from '../../interface/product';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private readonly _cartService: CartService) {}

  handleAddToCart(product: IProduct) {
    this._cartService.addToCart(product);
    console.log('Added to cart');
  }
}
