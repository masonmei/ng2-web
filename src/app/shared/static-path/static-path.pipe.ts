import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'staticPath'
})
export class StaticPathPipe implements PipeTransform {

  transform(value:string, staticPrefix:string):any {
    if (value !== null) {
      return value.replace("src=\".", "src=\"" + staticPrefix);
    }
    return value;
  }

}
