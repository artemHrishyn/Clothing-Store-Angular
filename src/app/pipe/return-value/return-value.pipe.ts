import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnValue'
})
export class ReturnValuePipe implements PipeTransform {

  transform(value: boolean): boolean {
    if (!value) {
      return value;
    }
    else {
      return value;
    }
  }
}
