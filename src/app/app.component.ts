import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website-integrate';
  myParams: object = {};

  ngOnInit() {
    {
      this.myParams = {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      };
    }
  }
}
