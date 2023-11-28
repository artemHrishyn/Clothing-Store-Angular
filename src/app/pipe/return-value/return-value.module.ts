import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnValuePipe } from './return-value.pipe';



@NgModule({
  declarations: [
    ReturnValuePipe
  ],
  imports: [
    CommonModule],
  exports: [ ReturnValuePipe ],
  providers: [ ReturnValuePipe ]
})
export class ReturnValueModule { }
