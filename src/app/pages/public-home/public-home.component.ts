import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent implements OnInit {

  categories: []
  events: []
  _showEventCategorySelectionModal = false

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
  }

}
