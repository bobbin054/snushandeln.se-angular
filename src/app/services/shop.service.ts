import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public $productItemChanged = new ReplaySubject<IProduct>();

  constructor() {}

  public addToCart(product: IProduct): void {
    this.$productItemChanged.next(product);
  }
  //https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
}
