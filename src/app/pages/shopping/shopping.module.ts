import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { BuyItemModule } from 'src/app/components/buy-item/buy-item.module';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [CommonModule, BuyItemModule],
})
export class ShoppingModule { }
