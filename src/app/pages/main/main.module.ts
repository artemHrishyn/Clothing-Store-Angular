import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ReviewsModule } from 'src/app/components/reviews/reviews.module';
import { ProductModule } from 'src/app/components/product/product.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ReviewsModule
  ]
})
export class MainModule { }
