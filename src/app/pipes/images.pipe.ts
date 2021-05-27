import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: any): any {
    if(!image) {
      return 'assets/img/card.jpg'
    }
    if(image){
      return image;
    }
  }

}
