import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Mybands } from 'src/app/models/DTOs/mybands';
import { AllbandsService } from 'src/app/services/allbands.service';

@Component({
  selector: 'bc-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})

export class BandListComponent implements OnInit {
// observable for json
bands$?: Observable<Mybands[]> | undefined;
// loading
public loading: boolean;
// for fake api
bands: any[] | undefined;
band: Mybands | undefined;
bandLength: any;
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
newForm: FormGroup | any;
 // checks
 regexYear: RegExp = /^[0-9]*$/;
 regexUrl:  RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
// messages
successMessage: string = "";
errorMessage: string = "";


  constructor(private bandService: AllbandsService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    this.loading = false;
   }

  ngOnInit(): void {
    // to get bands from json
    // this.getMeBandsJson();

    // from fake api
    this.getMeAllBands();
    this.createForm();
  }

// get bands from json doc
getMeBandsJson(): void{
  this.bands$ = this.bandService.getBands();
}
  // get the bands
  getMeAllBands(): void{
    this.bandService.getAllBands().subscribe(
      (data: any) => {
        this.bands = data;
        this.bandLength = data.length;
        console.log(this.bandLength);
        console.log(this.bands);
      }, err => {
        console.log(err);
        this.bandService.errorHandler(err);
      }
    )
  }
  // opens detail
goDetailBand(id: string): void {
this.router.navigate(['/bands', id]);
}
// create form
createForm() {
  this.newForm = this.fb.group({
    inputName    : [``, [Validators.required, Validators.minLength(3)]],
    inputAlbum   : [``, [Validators.required, Validators.minLength(1)]],
    inputYear    : [``, [Validators.required, Validators.maxLength(4), Validators.pattern(this.regexYear)]],
    inputInfo    : [``, [Validators.required, Validators.minLength(40)]],
    inputMembers : [``, [Validators.required]],
    inputUrl     : [``, [Validators.required, Validators.pattern(this.regexUrl)]],
  })
}
onSubmit(){
  console.log('onsubmit works');
//console.log(this.newForm.value);
  this.bandService.createBand( this.newForm.value).subscribe(
    (res) => {
      console.log(res);
      this.createBand(res);
      this.successMessage = "Well done, you just created a new band";
      this.toastr.success(this.successMessage, "Created band");
    }, err => {
      console.log(err);
      this.bandService.errorHandler(err);
    });
}
createBand(band: any) {
 // check id is first a number and then convert it to string
  this.bandLength = parseInt(this.bandLength);
  this.bandLength = this.bandLength + 1;
  this.bandLength = '' + this.bandLength;
  // create new band
  this.band = new Mybands(this.bandLength, band.name, band.members, band.album, band.yearAlbum, band.photoAlbum, band.info);
  console.log(this.band);
}

}
