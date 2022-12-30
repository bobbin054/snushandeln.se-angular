import { NgModule } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { ShoppingCartListComponent } from '../shopping-cart-list-component/shopping-cart-list.component';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [ProductModule],
  declarations: [ShopComponent, ShoppingCartListComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
