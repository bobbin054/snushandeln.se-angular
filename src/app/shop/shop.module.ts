import { NgModule } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [ProductModule],
  declarations: [ShopComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
