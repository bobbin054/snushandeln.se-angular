import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public $productItemChanged = new Subject<IProduct>();

  constructor() {}

  public addToCart(product: IProduct): void {
    this.$productItemChanged.next(product);
  }
}
