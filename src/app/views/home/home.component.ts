import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // form
  signUpForm: FormGroup | any;

// placeholders
placeholder = {
  email: " Example hello@johnwick.com"
}

// mail checker
regexEmail = /^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$/;

  constructor(private fb: FormBuilder) {

    this.getMail();

  }

  ngOnInit(): void {
  }

  // catch info for one day onSubmit()
getMail() {
this.signUpForm = this.fb.group({
  inputEmail: ['', [Validators.required, Validators.pattern(this.regexEmail)]]
});
}

// check info and isInvalid
isValidInput(name: string): boolean {
  const input: any = this.signUpForm.get(name);
  return input.touched && input.invalid
}
// onSubmit
onSubmit(){
  console.log('On submit works');
}
}
