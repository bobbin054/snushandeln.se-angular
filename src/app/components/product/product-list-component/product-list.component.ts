import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from './../../../interface/product';
import { ProductService } from './../../../services/product.service';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  public pageTitle: string = 'Products';
  public showImage: boolean = true;
  public sub!: Subscription;
  public filteredProducts: IProduct[] = [];
  public products: IProduct[] = [];
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(
    private _productService: ProductService,
    public cartService: CartService
  ) {}

  public performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public ngOnInit(): void {
    this.sub = this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = products;
      },
      error: (err) => {
        console.log(err);
        throw err;
      },
    });
  }

  public onAddToCartClicked(message1: any): void {
    console.log('ProductListComponent: ' + JSON.stringify(message1));
  }

  public onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
