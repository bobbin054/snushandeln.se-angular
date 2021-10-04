import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../component/app.component';
import { WelcomeComponent } from '../component/welcome.component';
import { ProductModule } from './product.module';
import { ShoppingCartModule } from './shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent,

  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ProductModule,

    ShoppingCartModule,

    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ]),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
