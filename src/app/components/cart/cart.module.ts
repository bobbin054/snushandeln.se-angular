import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { CartPreviewComponent } from './cart-preview/cart-preview.component';

const components = [CartComponent, CartPreviewComponent];

@NgModule({
  declarations: [components],
  imports: [BrowserModule, CommonModule, FormsModule],
  exports: [components],
})
export class CartModule {}
