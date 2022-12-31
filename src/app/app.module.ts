import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome-component/welcome.component';
import { ShoppingCartComponent } from './shopping-cart-component/shopping-cart.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from './shared.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
})
export class AppModule {}
