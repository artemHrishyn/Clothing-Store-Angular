import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductCartModule } from 'src/app/components/product-cart/product-cart.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductCartModule,
  ]
})
export class MainModule { }
