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
  year: "example: 1921",
  info: "Lorem ipsum...",
  members: "John Wick, John Rambo, John Wayne, John Ford",
  url: "https://yourPhotoUrl.com"
}

// form
  updateForm: FormGroup | any;

  // checks
regexYear: RegExp = /^[0-9]*$/;
regexUrl:  RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

// youTube
myVideoId: string = "";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private serviceAllBands: AllbandsService ) {

   this.createForm()
               }

  ngOnInit(): void {
this.pickUpBand();
this.updateText();

// Este código carga el reproductor de la API en un iframe de manera asíncrona, siguiendo las instrucciones:
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

pickUpBand() {
  this.id = (this.route.snapshot.paramMap.get('id'));
  this.serviceAllBands.getOneBand(this.id)
  .subscribe(
    (data: any) => {
      this.band = data;
      this.pickUpVideo(this.band.name, this.band.album);

    }, err => {
      console.log(err);
      this.serviceAllBands.errorHandler(err);
    }
  )
}
// delete
deleteOneBand(id: any):void {
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
    inputYear    : [``, [Validators.required, Validators.minLength(4) , Validators.maxLength(4), Validators.pattern(this.regexYear)]],
    inputInfo    : [``, [Validators.required, Validators.minLength(40)]],
    inputMembers : [``, [Validators.required]],
    inputUrl     : [``, [Validators.required, Validators.pattern(this.regexUrl)]],
  });
}

isValidInput(str: string): boolean {
  const input: any = this.updateForm.get(str);
  return input.touched && input.invalid;
}
// onsubmit
onSubmit(id: any): any | null{
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
  let myDiv = document.querySelector<any>('#myForm')as HTMLInputElement;
  myDiv.classList.toggle('d-none');
  (myDiv.classList.contains('d-none')) ? this.updateText() : this.closeText();
 // document.querySelector<any>('#myDelete').classList.add('d-none') as HTMLElement;
 // to discuss with UI/UX team
}
closeDiv(): void {
  setTimeout(() => {
    document.querySelector<any>('#info').classList.add('d-none') as HTMLDivElement;
    this.closeForm();
    this.clearUpdateButton();
    this.clearDeleteButton();
  }, 3000);

}
// change text button
closeText(){
 let messageButton = document.querySelector<any>('#updateButton') as HTMLElement;
 messageButton.innerHTML = "close form";
}
updateText(){
  let messageButton = document.querySelector<any>('#updateButton') as HTMLElement;
  messageButton.innerHTML = "update album";
}
// close form after info sent
closeForm() {
  document.querySelector<any>('#myForm').classList.add('d-none') as HTMLInputElement;
}
clearDeleteButton() {
  document.querySelector<any>('#myDelete').classList.add('d-none') as HTMLElement;
}
clearUpdateButton(){
  document.querySelector<any>('#updateButton').classList.add('d-none') as HTMLElement;
}
// videos depending on group
pickUpVideo(str1: string , str2: string): void {
  // should be with search api youtube in the future
  switch (str1) {
    case  "Queen":
      console.log(str2);
        (str2 == "Queen") ? this.myVideoId = "ZSUWOgQdX5A" : this.myVideoId = "AnBf_nm2zXw";
      break;
    case "The Rolling Stones":
        (str2 == "The Rolling Stones") ? this.myVideoId = "V0uzD5DMt8k" : this.myVideoId = "5pPSswpdzfM";
      break;
    case "Pink Floyd":
        (str2 == "The Piper at the Gates of Dawn") ? this.myVideoId = "xSOk0V7X_mA" : this.myVideoId = "UYI8NnN3xZg";
      break;
    case "Deep Purple":
        (str2 == "Queen") ? this.myVideoId = "5gqAE42A" : this.myVideoId = "qtl3W7mhRLs";
      break;
    case "AC/DC":
        (str2 == "High Voltage") ? this.myVideoId = "RlyPORi_B7s" : this.myVideoId = "6CwIB6pQoPo";
      break;
    case "Ramones":
        (str2 == "Ramones") ? this.myVideoId = "LLzDw_1Y97I" : this.myVideoId = "PrIgZdmz52k";
      break;
    case "Kiss":
        (str2 == "Kiss") ? this.myVideoId = "GVPNH3Za928" : this.myVideoId = "p4eFw0I1grs";
      break;

    default:
          this.myVideoId = "UgfsbL-uHOA";
      break;
  }

}
}
