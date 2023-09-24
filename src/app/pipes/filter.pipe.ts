import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, search_value: any, ...args: unknown[]): any {
    if (search_value.length) {
      return value.filter((res: any) =>
        res?.brand.toLowerCase().includes(search_value.toLowerCase())
      );
    } else {
      return value;
    }
  }
}
