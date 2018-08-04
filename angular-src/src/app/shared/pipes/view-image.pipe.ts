import { environment } from './../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewImage'
})
export class ViewImagePipe implements PipeTransform {

  transform(imageLocation: string): string {
    if(imageLocation) {
      return environment.static + imageLocation;
    }
    return "";
  }

}
