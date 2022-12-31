import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../../convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail-component/product-detail.component';
import { ProductListComponent } from './product-list-component/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../../guards/product-detail.guard';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
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
    ]),
    CommonModule,
    SharedModule,
  ],
  exports: [ProductListComponent, ProductDetailComponent],
})
export class ProductModule {}
