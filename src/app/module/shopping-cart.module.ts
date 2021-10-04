import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingCartListComponent } from '../component/shopping-cart-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: 'shopping-cart', component: ShoppingCartListComponent },
        {
          component: ShoppingCartListComponent,
          path: 'shopping-cart'
        },
      ]),
  ]
})
export class ShoppingCartModule { }
