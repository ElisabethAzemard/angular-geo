import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".hamburger").click(function() {
      $(".hamburger").toggleClass("is-active");
    });

    $("#link1").click(function() {
        $("#link1 .sub-menu").addClass("is-active");
        $("#link2 .sub-menu").removeClass("is-active");
    });

    $("#link2").click(function() {
        $("#link2 .sub-menu").addClass("is-active");
        $("#link1 .sub-menu").removeClass("is-active");
    });

  }

}
