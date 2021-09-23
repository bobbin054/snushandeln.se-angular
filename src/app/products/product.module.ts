import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(
      [
        { path: 'products', component: ProductListComponent },
        {
          component: ProductDetailComponent,
          path: 'products/:id',
          canActivate: [ProductDetailGuard]
        },
      ]),
    SharedModule
  ]
})
export class ProductModule { 

  
}
