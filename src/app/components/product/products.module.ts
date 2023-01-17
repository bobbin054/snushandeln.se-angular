import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail-component/product-detail.component';
import { ProductListComponent } from './product-list-component/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../../guards/product-detail.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const components = [ProductListComponent, ProductDetailComponent];

@NgModule({
  declarations: [components],
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
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  exports: [components],
})
export class ProductsModule {}
