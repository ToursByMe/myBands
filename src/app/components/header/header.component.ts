import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'bc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // for the ngfor images
  images: any [] = [];
  constructor(private imgService: ImagesService) { }

  ngOnInit(): void {
    this.imgService.getImages()
    .subscribe(
      (data: any) => {
        this.images = data;
        console.log(this.images)
      },
      error => {
        console.log(error)
      });

  }

}
