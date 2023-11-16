import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductCartModule } from 'src/app/components/product-cart/product-cart.module';
import { ReviewsModule } from 'src/app/components/reviews/reviews.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductCartModule,
    ReviewsModule
  ]
})
export class MainModule { }
