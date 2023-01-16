import { Component } from '@angular/core';
import { IProductInCart } from 'src/app/interface/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'pm-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent {

  public productsInCart: IProductInCart[] = [];

  constructor(private _shopService: ShopService) {
   
  }
}
