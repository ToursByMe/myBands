import { Component } from '@angular/core';

// bootstrap js import statement
import 'bootstrap/js/dist/collapse'; // ~navbar, ~transitions, ~accordion
import 'bootstrap/js/dist/carousel';
@Component({
  selector: 'bc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bandcamp';
}
