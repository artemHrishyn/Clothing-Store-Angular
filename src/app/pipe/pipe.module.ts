import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModule } from './counter/counter.module';
import { MixElementsModule } from './mix-elements/mix-elements.module';
import { ReturnValueModule } from './return-value/return-value.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterModule,
    MixElementsModule,
    ReturnValueModule
  ]
})
export class PipeModule { }
