import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on("load resize scroll", function() {
      $(".header-article").each(function() {

        var windowTop = $(window).scrollTop();
        if ( windowTop < 1) {
          $(this)
          .find(".bg-move")
          .css({ left: 0})
          .css({ height: "100%"})
          .css({ top: "0%"})
          .css({ width: '100vw' })
          .css("transition","all .3s ease" );

        }

        if (windowTop < 2 && windowTop > 2) {
          $(this)
          .find(".bg-move")
          .css({ height: "500px"})
          .css({ top: "20%"})
          .css({ left: '55%' })
          .css("transition","all .3s ease" );

        }

        if (windowTop > 3) {
          $(this)
          .find(".bg-move")
          .css({ height: "500px"})
          .css({ position: 'fixed' })
          .css({ left: '55%' })
          .css({ right: '0' })
          .css({ width: '50%' })
          .css({ top: "20%"})
          .css("transition","all .3s ease" );


        }

        if (windowTop > 1000) {
          $(this)
          .find(".bg-move")
          .css({ top: 1200 - windowTop})
          .css("transition","none" );
        }
      });

      $(".titre").each(function() {

        var windowTop = $(window).scrollTop();

        if (windowTop < 2) {
          console.log(windowTop);
          $(".titre").css("color","white" );
          $("p").css("color","white" );
        }

        if (windowTop > 2) {
          console.log(windowTop);
          $(".titre").css("color","black" );
          $("p").css("color","black" );
        }

      });
    });
  }

}
