import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
    });
  }
 
  
  ngAfterViewInit() {
    $('#experience-timeline').each(function() {

      // Create each timeline block
      $(this).children('div').each(function() {
          $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $(this).find('.vtimeline-point').each(function() {
          $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $(this).find('.vtimeline-content').each(function() {
          var date = $(this).data('date');
          if (date) { // Prepend if exists
              $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
          }
      });

  });

  }

}
