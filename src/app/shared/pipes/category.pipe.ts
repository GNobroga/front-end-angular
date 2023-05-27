import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 3000) {
        return "attach_money";
    }
    return "inexpensive";
  }

}
