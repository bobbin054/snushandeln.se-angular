import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IProduct, IProductInCart } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsInCart$ = new ReplaySubject<IProductInCart[]>();
  private _productsInCart: IProductInCart[] = [];
  private get productsInCart(): IProductInCart[] {
    return this._productsInCart;
  }
  private set productsInCart(value: IProductInCart[]) {
    this._productsInCart = value;
    this.productsInCart$.next(this._productsInCart);
    console.log('Shop service products in cart: ', this._productsInCart);
  }

  constructor() {}

  //https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  public addToCart(product: IProduct): void {
    const alreadyAddedProduct = this.productsInCart.find(
      (p) => p.productName === product.productName
    );
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
    } else {
      this.productsInCart = [
        ...this.productsInCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }
  }

  public getTotalPrice(): number {
    return this.productsInCart.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }

  public increaseQuantity(product: IProductInCart): void {
    product.quantity++;
  }

  public decreaseQuantity(product: IProductInCart): void {
    product.quantity--;
    this.removeEmptyProducts();
  }

  private removeEmptyProducts(): void {
    this.productsInCart = this.productsInCart.filter((p) => p.quantity > 0);
    console.log('Shop service products in cart: ', this.productsInCart);
  }

  public removeFromCart(product: IProductInCart): void {
    this.productsInCart = this.productsInCart.filter((p) => p !== product);
  }

  public countTotalQuantity(): number {
    return this.productsInCart.reduce((prev, curr) => prev + curr.quantity, 0);
  }
}
