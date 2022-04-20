import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    $(document).ready(function () {
      var scrollTop = 0;
      $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 2) {
          $('.TopBar').addClass('TopBar--fixed');
        } else if (scrollTop < 2) {
          $('.TopBar').removeClass('TopBar--fixed');
        }
      });
    });
  }


}
