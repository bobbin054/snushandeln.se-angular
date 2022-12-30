import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interface/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'pm-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css'],
})
export class ShoppingCartListComponent {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  productId: number | undefined;
  public imageWidth: number = 100;
  public imageMargin: number = 2;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${this.productId}`;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.product = products.find((x) => x.productId === this.productId);
      },
    });
  }
}
