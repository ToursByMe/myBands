import { Component, OnInit } from '@angular/core';
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

  constructor(private bandService: AllbandsService) {
    this.loading = false;
   }

  ngOnInit(): void {
    // to get bands from json
    this.bands$ = this.bandService.getBands();
  }

}
