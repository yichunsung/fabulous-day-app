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

  isOpenMenu: boolean = false;

  menuList = [
    {
      id: 1,
      path: '/home',
      displayName: 'Dashboard'
    },
    {
      id: 2,
      path: '/hero',
      displayName: 'Projects'
    },
    {
      id: 2,
      path: '/home',
      displayName: 'Members'
    }
  ]

  open(): void {
    console.log('asd');
    this.isOpenMenu = this.isOpenMenu ? false : true;
  }
}
