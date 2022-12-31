import { NgModule } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { CartComponent } from '../cart-component/cart.component';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [ProductModule],
  declarations: [ShopComponent, CartComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
