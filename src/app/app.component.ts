import { Component } from '@angular/core';

// Constant
import { sideMenu } from './const/side-menu.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabulous day';

  isOpenMenu: boolean = false;

  menuList = sideMenu;

  open(): void {
    console.log('asd');
    this.isOpenMenu = this.isOpenMenu ? false : true;
  }
}
