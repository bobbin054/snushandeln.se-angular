import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome-component/welcome.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product/product-list-component/product-list.component';
import { ProductsModule as ProductsModule } from './components/product/products.module';
import { CartModule } from './components/cart/cart.module';

@NgModule({
  declarations: [AppComponent],
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
    CartModule,
  ],
})
export class AppModule {}
