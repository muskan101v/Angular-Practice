import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../model';

@Pipe({
  name: 'sorting',
  standalone: true,
})
export class SortingPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    value.sort((a: product, b: product) => {
      if (a.price < b.price) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }
}
