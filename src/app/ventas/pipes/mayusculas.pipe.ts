import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mayusculas' })
export class MayusculasPipe implements PipeTransform {
  transform(value: string, mayusculas: boolean = true): string {
    //if(mayusculas) return value.slice(0, 1).toUpperCase().concat(value.toLowerCase().slice(1));
    if (mayusculas) return value.toUpperCase();
    return value.toLowerCase();
  }
}
