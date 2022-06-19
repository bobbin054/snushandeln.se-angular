import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared.module';
import { ShoppingCartListComponent } from '../shopping-cart-list-component/shopping-cart-list.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartListComponent,
    AddToCartComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        component: ProductDetailComponent,
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
      },
      { component: ShoppingCartListComponent, path: 'shopping-cart/:id' },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
