import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import { IProduct, IProductInCart } from '../../interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterContentChecked {
  public productId: number | undefined;
  public productsInCart: IProductInCart[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shopService: ShopService
  ) {
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

  ngAfterContentChecked(): void {
    // this.productsInCart = this.productsInCart.filter((p) => p.quantity > 0);
  }
}
