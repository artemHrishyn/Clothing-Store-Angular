import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NewProductComponent
  ]
})
export class NewProductModule { }
