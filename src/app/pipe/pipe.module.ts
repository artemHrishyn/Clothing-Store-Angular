import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModule } from './counter/counter.module';
import { MixElementsModule } from './mix-elements/mix-elements.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterModule,
    MixElementsModule
  ]
})
export class PipeModule { }
