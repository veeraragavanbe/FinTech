import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: String

  url = environment.API_URL

  public logInStatus = new Subject();

  public userDetails = new Subject();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    try {
      this.token = JSON.parse(localStorage.getItem("accessToken"));
      this.logInStatus.next(true);

      if (this.token) {
        //this.router.navigate(['/events/me'])
      }
    } catch (e) {
      this.token = null
      this.logInStatus.next(false);
    }

  }


  registerNewUser(data) {
    return this.httpClient.post(this.url + "/hostnmeet/register", data);
  }

  login(data) {
    return this.httpClient.post(this.url + "/hostnmeet/login", data);
  }

  serviceProviderLogin(data) {
    data.userType = 'serviceprovider'
    return this.httpClient.post(this.url + "/hostnmeet/login", data);
  }

  optVerification(data) {
    return this.httpClient.post(this.url + "/hostnmeet/otpverification", data);
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
    this.token = null;
    this.router.navigate(['/login']);
    // location.reload();
  }

  isLoggedIn() {
    if (this.token) {
      this.logInStatus.next(true);
      return true;
    }
    this.logInStatus.next(false);
  }

  getDetails() {
    return JSON.parse(localStorage.getItem("currentUser")).user
  }

}
