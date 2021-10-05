import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { ProductDetailComponent } from '../component/product-detail.component';
import { ProductListComponent } from '../component/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail.guard';
import { SharedModule } from './shared.module';
import { ShoppingCartListComponent } from '../component/shopping-cart-list.component';


@NgModule({
  declarations: [
    ProductListComponent,

    ProductDetailComponent,

    ShoppingCartListComponent,

    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(
      [
        {
          path: 'products'
          , component: ProductListComponent
        },
        {
          component: ProductDetailComponent,
          path: 'products/:id',
          canActivate: [ProductDetailGuard]
        },
        { component: ShoppingCartListComponent, path: 'shopping-cart/:id' },
      ]),
    SharedModule
  ]
})
export class ProductModule
{


}
