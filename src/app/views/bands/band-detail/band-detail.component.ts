import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
bands?: Mybands[] = [];

// errors
myError: boolean = false;
errorMessage: string = "";

// success
successMessage: string = "";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private serviceAllBands: AllbandsService ) { }

  ngOnInit(): void {
this.pickUpBand();
  }

pickUpBand() {
  this.id = (this.route.snapshot.paramMap.get('id'));
  this.serviceAllBands.getOneBand(this.id)
  .subscribe(
    (data: any) => {
      this.band = data;
      console.log(this.band);
    }, err => {
      console.log(err);
      this.serviceAllBands.errorHandler(err);
    }
  )
}
// delete
deleteOneBand(id: any) {
  // id = (this.route.snapshot.paramMap.get('id'));
  this.serviceAllBands.deleteBand(id)
  .subscribe(
    (_res) => {
      this.bands = this.bands?.filter(item =>  item.id !== id);
      // user
      this.successMessage = `The Band has been deleted from the database.`;
      this.toastr.success(this.successMessage, "Success");
    }, err => {
      console.log(err);
      this.serviceAllBands.errorHandler(err);
    });
}
}
