import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Meetup';

  currentUrl = ""

  userLoggedInOrNot: Boolean = false

  constructor(
    private router: Router,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    this.auth.logInStatus.subscribe((res: Boolean) => {
      this.userLoggedInOrNot = res;
    });

    this.userLoggedInOrNot = this.auth.isLoggedIn();

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // if (this.userLoggedInOrNot && this.currentUrl == "/") {
        //   this.router.navigate(["/events/me"]);
        //   return true;
        // } else {
        //   this.router.navigate(["/"])
        // }
      }
    });
  }

}
