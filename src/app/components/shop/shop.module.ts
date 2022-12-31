import { NgModule } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { CartComponent } from '../cart/cart.component';
import { ShopComponent } from './shop.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ProductModule, CommonModule],
  declarations: [ShopComponent, CartComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
