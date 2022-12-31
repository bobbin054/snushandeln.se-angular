import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interface/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'pm-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  public pageTitle: string = 'Product Detail';
  public product: IProduct | undefined;
  public productId: number | undefined;
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
