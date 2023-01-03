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
export class CartComponent implements OnInit, OnDestroy {
  public productId: number | undefined;
  public productsInCart: IProductInCart[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shopService: ShopService
  ) {}

  ngOnInit(): void {
    // this.productId = Number(this._route.snapshot.paramMap.get('id'));

    this._shopService.$productItemChanged.subscribe({
      next: (product) => {
        const alreadyAddedProduct = this.productsInCart.find(
          (p) => p.productName === product.productName
        );
        if (alreadyAddedProduct) {
          alreadyAddedProduct.quantity++;
        } else {
          this.productsInCart.push({ ...product, quantity: 1 });
        }
      },
    });
  }

  public onRemoveProduct(product: IProductInCart): void {
    const index = this.productsInCart.findIndex(
      (p) => p.productName === product.productName
    );
    if (index > -1) {
      this.productsInCart.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this._shopService.$productItemChanged.unsubscribe();
  }

  public removeFromCart(product: IProductInCart): void {
    product.quantity--;
    this.productsInCart = this.productsInCart.filter((p) => p.quantity > 0);
  }

  public getTotalPrice(): number {
    return this.productsInCart.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }
}
