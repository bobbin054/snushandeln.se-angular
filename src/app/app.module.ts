import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome-component/welcome.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopModule } from './components/shop/shop.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';

@NgModule({
  declarations: [AppComponent, CartPreviewComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ShopModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shopping-cart', component: CartComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
})
export class AppModule {}
