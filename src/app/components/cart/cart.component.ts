import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public productId: number | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this._route.snapshot.paramMap.get('id'));
    this._shopService.$productItemChanged.subscribe((product) => {
      this.products.push(product);
    });
  }

  ngOnDestroy(): void {
    this._shopService.$productItemChanged.unsubscribe();
  }
}
