import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails: any

  userDetailsAvailableOrNot: Boolean

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userDetails.subscribe((res: any) => {
      this.userDetails = res
    })
    var data = JSON.parse(localStorage.getItem("currentUser"));
    if (data) {
      this.userDetails = data.user;
    } else {
      this.userDetails = " ";
    }
    this.authService.logInStatus.subscribe((res: Boolean) => {
      this.userDetailsAvailableOrNot = res;
    });

    this.userDetailsAvailableOrNot = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.authService.logInStatus.next(false);
  }

  closeNav() {
    document.getElementById("MobileNavigation").style.width = "0";
  }

  onOpenNav() {
    document.getElementById("MobileNavigation").style.width = "0";
  }

  openNav() {
    document.getElementById("MobileNavigation").style.width = "100%";
  }


  navigateToHomePage() {
    if (this.userDetailsAvailableOrNot) {
      this.router.navigate(['/events/me'])
    } else {
      this.router.navigate(['/']);
    }
  }

}
