import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { Mybands } from 'src/app/models/DTOs/mybands';
import { AllbandsService } from 'src/app/services/allbands.service';

@Component({
  selector: 'bc-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

band!: Mybands;
id?: any;
bandSub$?: Subscription;
bands?: Mybands[] = [];

// errors
myError: boolean = false;
errorMessage: string = "";

// success
successMessage: string = "";

// placeholders
placeholder = {
  name: "Band's name",
  album: "Album's name",
  year: "Year of release",
  info: "Lorem ipsum...",
  members: "John Wick, John Rambo, John Wayne, John Ford",
  url: "https://yourPhotoUrl.com"
}

// form
  updateForm: FormGroup | any;

  // checks
regexYear: RegExp = /^[0-9]*$/;
regexUrl:  RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private serviceAllBands: AllbandsService ) {

   this.createForm()
               }

  ngOnInit(): void {
this.pickUpBand();
// this.showMembers();
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
    this.closeDiv();
}
// create form
createForm() {
  this.updateForm = this.formBuilder.group({
    inputName    : [``, [Validators.required, Validators.minLength(3)]],
    inputAlbum   : [``, [Validators.required, Validators.minLength(1)]],
    inputYear    : [``, [Validators.required, Validators.maxLength(4), Validators.pattern(this.regexYear)]],
    inputInfo    : [``, [Validators.required, Validators.minLength(40)]],
    inputMembers : [``, [Validators.required]],
    inputUrl     : [``, [Validators.required, Validators.pattern(this.regexUrl)]],
  })
}
// onsubmit
onSubmit(id: any){
  console.log(this.updateForm.value);
  this.serviceAllBands.updateBand(id, this.updateForm.value).subscribe(
    (res) => {
      console.log(res);
      this.successMessage = "Well done, you just updated the info of the band";
      this.toastr.success(this.successMessage, "Updated band");
    }, err => {
      console.log(err);
      this.serviceAllBands.errorHandler(err);
    });

}
// arrMembers
// Why I can't see the members from the api and yet yes from my json?
// Moreover, it works perfectly with the json, it does update it!
// I need to do a mongoDB
//
showDiv(): void {
  document.querySelector('#myForm').classList.remove('d-none') as unknown | null;
 // document.querySelector('#myDelete').classList.add('d-none') as unknown;
 // to discuss with UI/UX team
}
closeDiv(): void {
  document.querySelector('#info').classList.add('d-none') as unknown | null;
}

}
