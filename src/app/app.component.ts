import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isShrunk: boolean;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if (window.pageYOffset > 10) {
          this.isShrunk = true;
        } else {
          this.isShrunk = false;
        }
      });
    };
  }
}
