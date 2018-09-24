import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(options, value:string) {
    if(value == undefined || value == "") return options;
    let result = []; 
    let i = 0;
    if (options != undefined) {
        while (options[i] != undefined) {
            if (options[i].name.toLowerCase().indexOf(value) > -1) {
                result.push(options[i])
            }
            i++;
        }
    }
    return result;
  }
}