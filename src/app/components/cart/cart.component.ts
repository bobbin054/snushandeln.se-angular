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
  public pageTitle: string = 'Product Detail';
  public products: IProduct[] = [];
  public productId: number | undefined;
  public imageWidth: number = 100;
  public imageMargin: number = 2;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${this.productId}`;

    this._shopService.$productItemChanged.subscribe((product) => {
      this.products.push(product);
    });
  }

  ngOnDestroy(): void {
    this._shopService.$productItemChanged.unsubscribe();
  }
}
