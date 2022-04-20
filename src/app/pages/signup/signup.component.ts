import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
declare var $: any

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SignupComponent implements OnInit {

  registerDetails = {
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    address: "",
    country: "",
    emailId: "",
    phoneNumber: "",
    password: "",
    preferedCategory: []
  }
  maxDate: Date;

  firstNameErrorText = ""
  genderErrorText = ""
  phoneNumberErrorText = ""
  emailIdErrorText = ""
  addressErrorText = ""
  countryErrorText = ""
  passwordErrorText = ""
  countryPhoneCode = ""
  countries = []

  userDOB = ""
  otp: Number
  maxDateObject = { year: 1789, month: 7, day: 14 };

  userDOBObject = {
    year: 1995,
    month: 1,
    day: 1
  }

  date: NgbDate

  preferredCategories = []

  constructor(
  ) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  register() {
    alert('api integration not yet done');
  }

}