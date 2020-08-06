import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Open mobile menu
    $('#mobile-menu-open').click(function () {
      $('header, body, app-root').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
      $('header, body, app-root').removeClass('active');
    });

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

      // Treat as normal link if no-scroll class
      if ($(this).hasClass('no-scroll')) return;

      e.preventDefault();
      var heading = $(this).attr('href');
      var scrollDistance = $(heading).offset().top - 62.4;

      console.log("Scroll dist : ", scrollDistance);

      $('html, body, app-root').animate({
        scrollTop: scrollDistance + 'px'
      }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

      // Hide the menu once clicked if mobile
      if ($('header').hasClass('active')) {
        $('header, body, app-root').removeClass('active');
      }
    });

  }

  onClickToHome() {
    this.router.navigate(['/']);
  }

}
