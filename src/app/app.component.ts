import { Component } from '@angular/core';

// Constant
import { sideMenu } from './const/side-menu.const';
import { navMenu } from './const/nav-menu.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabulous day';

  isOpenMenu: boolean = false;
  navMenuList = navMenu;
  menuList = sideMenu;

  open(): void {
    console.log('asd');
    this.isOpenMenu = this.isOpenMenu ? false : true;
  }
}
