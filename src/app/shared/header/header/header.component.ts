import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on("load resize scroll", function() {
      $(".header").each(function() {

        var windowTop = $(window).scrollTop();
        if ( windowTop < 10) {
          $(this)
          .find(".navbar")
          .css("background", "none")
          .css("transition","all .3s ease" );
        }

        if ( windowTop > 10) {
          $(this)
          .find(".navbar")
          .css("background", "rgba(68, 74, 88, 0.4)")
          .css("transition","all .3s ease" );

        }
      });
    });

  }

}
