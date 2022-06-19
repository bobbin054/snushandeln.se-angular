import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { ProductModule } from './product/product.module';
import { ShoppingCartListComponent } from './shopping-cart-list-component/shopping-cart-list.component';

@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent,

  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ProductModule,

    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {path: 'shopping-cart', component: ShoppingCartListComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ]),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
