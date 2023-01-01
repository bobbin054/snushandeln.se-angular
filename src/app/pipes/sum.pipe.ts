import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false,
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): number {
    const sum = items.reduce((prev, curr) => prev + curr[attr], 0);
    // Round to 2 decimal places
    return Math.round(sum * 100) / 100;
  }
}
