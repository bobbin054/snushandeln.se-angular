import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome-component/welcome.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { CartPreviewComponent } from './components/cart/cart-preview/cart-preview.component';
import { ProductListComponent } from './components/product/product-list-component/product-list.component';
import { ProductModule as ProductsModule } from './components/product/product.module';

@NgModule({
  declarations: [AppComponent, CartPreviewComponent, CartComponent],
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'shopping-cart', component: CartComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ProductsModule,
  ],
})
export class AppModule {}
