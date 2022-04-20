import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    username: "",
    password: ""
  }

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  login() {
    this.toastr.error("No API Connection established");
  }

}
