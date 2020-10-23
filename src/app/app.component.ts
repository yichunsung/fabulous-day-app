import { Component } from '@angular/core';

// Constant
import { mrt } from './mrt-data.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabulous day';
  list = mrt;
}
