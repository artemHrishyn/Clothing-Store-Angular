import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ProductModule } from 'src/app/components/product/product.module';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
})
export class ShoppingModule { }
