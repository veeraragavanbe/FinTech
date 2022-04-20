import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logoutServiceProvider() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(["/service-provider/login"]);
  }

  navigateToHomePage() {

  }
  closeSideNav() {
    document.getElementById("Sidenavbar").style.width = "0";
  }
  onOpenSideNav() {
    document.getElementById("Sidenavbar").style.width = "0";
  }
}
