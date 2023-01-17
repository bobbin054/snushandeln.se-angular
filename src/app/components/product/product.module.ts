import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../../pipes/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail-component/product-detail.component';
import { ProductListComponent } from './product-list-component/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../../guards/product-detail.guard';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star-component/star.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent,
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
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  exports: [ProductListComponent, ProductDetailComponent],
})
export class ProductModule {}
