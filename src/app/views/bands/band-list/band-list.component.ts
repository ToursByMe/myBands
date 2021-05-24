import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mybands } from 'src/app/models/DTOs/mybands';
import { AllbandsService } from 'src/app/services/allbands.service';

@Component({
  selector: 'bc-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {
// observable
bands$?: Observable<Mybands[]> | undefined;
// loading
public loading: boolean;
// for fake api
bands: any[] | undefined;

  constructor(private bandService: AllbandsService,
              private router: Router) {
    this.loading = false;
   }

  ngOnInit(): void {
    // to get bands from json
    // this.bands$ = this.bandService.getBands();
    // from fake api
    this.bandService.getAllBands().subscribe(
      (data: any) => {
        this.bands = data;
        console.log(this.bands);
      }, error => {
        console.log(error);
      }
    )


  }
goDetailBand(id: string) {
this.router.navigate(['/bands', id]);
}
}
