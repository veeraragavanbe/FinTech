import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  logout() {
   alert('api not integrated') 
  }

}
