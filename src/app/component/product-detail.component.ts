import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interface/product';
import { ProductService } from '../product.service';
@Component({
  templateUrl: '../view/product-detail.component.html',
  styleUrls: ['../css/product-detail.component.css']
})

export class ProductDetailComponent implements OnInit
{
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  prdId: Number | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService)
  {

  }

  ngOnInit(): void
  {

    this.prdId = Number(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += `: ${this.prdId}`;

    this.productService.getProducts().subscribe({
      next: products =>
      {
        this.product = products.find(x => x.productId === this.prdId);
      }
    });

  }
  onBack(): void
  {
    this.router.navigate(['/products']);
  }
}
