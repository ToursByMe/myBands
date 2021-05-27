import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: any): string | null{
    if(!image) {
      return 'assets/img/card.jpg'
    } 
   return null;
  }

}
