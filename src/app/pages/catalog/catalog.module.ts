import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCartModule } from 'src/app/components/product-cart/product-cart.module';
import { ProductInfoModule } from 'src/app/components/product-info/product-info.module';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCartModule,
    ProductInfoModule
  ]
})
export class CatalogModule { }
