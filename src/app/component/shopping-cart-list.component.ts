import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "../interface/product";
import { ProductService } from "../service/product.service";

@Component({
    templateUrl: '../view/shopping-cart-list.component.html',
    styleUrls: ['../css/shopping-cart-list.component.css'],
    selector: 'shopping-cart-list-component'
})
export class ShoppingCartListComponent
{
    pageTitle: string = 'Product Detail';
    product: IProduct | undefined;
    productId: Number | undefined;
    public imageWidth: number = 100;
    public imageMargin: number = 2;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService)
      {
    
      }

    ngOnInit(): void
  {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += `: ${this.productId}`;

    this.productService.getProducts().subscribe({
      next: products =>
      {
        this.product = products.find(x => x.productId === this.productId);
      }
    });

  }
}