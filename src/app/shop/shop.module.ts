import { NgModule } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { ShoppingCartComponent } from '../shopping-cart-component/shopping-cart.component';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [ProductModule],
  declarations: [ShopComponent, ShoppingCartComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
