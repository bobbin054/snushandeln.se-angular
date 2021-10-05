import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../component/app.component';
import { WelcomeComponent } from '../component/welcome.component';
import { ProductModule } from './product.module';
import { ShoppingCartListComponent } from '../component/shopping-cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartListComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ProductModule,

    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { component: ShoppingCartListComponent, path: 'shopping-cart' },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ]),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
