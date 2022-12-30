import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail-component/product-detail.component';
import { ProductListComponent } from './product-list-component/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ShoppingCartListComponent } from '../shopping-cart-list-component/shopping-cart-list.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

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
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartListComponent,
    AddToCartComponent,
  ],
})
export class ProductModule {}
