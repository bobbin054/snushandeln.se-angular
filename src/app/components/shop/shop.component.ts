import { Component } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { IProduct } from '../../interface/product';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private readonly _shopService: ShopService) {}

  handleAddToCart(product: IProduct) {
    this._shopService.addToCart(product)
    console.log('Added to cart');
  }
}
