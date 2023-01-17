import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProductInCart } from '../../interface/product';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public productId: number | undefined;
  public productsInCart: IProductInCart[] = [];

  constructor(private _shopService: CartService) {
    this._shopService.productsInCart$.subscribe((products) => {
      this.productsInCart = products;
    });
  }

  public removeFromCart(product: IProductInCart): void {
    this._shopService.removeFromCart(product);
  }

  public increaseQuantity(product: IProductInCart): void {
    this._shopService.increaseQuantity(product);
  }

  public decreaseQuantity(product: IProductInCart): void {
    this._shopService.decreaseQuantity(product);
    console.log('Cart productis in cart: ', this.productsInCart);
  }

  public getTotalPrice(): number {
    return this._shopService.getTotalPrice();
  }
}
