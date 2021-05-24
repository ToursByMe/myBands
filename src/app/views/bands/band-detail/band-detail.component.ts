import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mybands } from 'src/app/models/DTOs/mybands';
import { AllbandsService } from 'src/app/services/allbands.service';

@Component({
  selector: 'bc-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

band?: Mybands;
id?: any;
bandSub$?: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private serviceAllBands: AllbandsService ) { }

  ngOnInit(): void {
this.pickUpBand();
  }
pickUpBand() {
  this.id = (this.route.snapshot.paramMap.get('id'));
  this.bandSub$ = this.serviceAllBands.getBand(this.id)
  .subscribe(
    (data: any) => {
      console.log(this.id);
      this.band = data;
      console.log(this.band)
    }, error => {
      console.log(error);
    }
  )
}
}
