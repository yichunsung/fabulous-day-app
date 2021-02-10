import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

// Constant
import { mrt } from '../mrt-data.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = mrt;
  title = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  async getHomeData() {
    let res;
    try {
      res = await this.homeService.getHomeData();
      console.log(res.data);
      this.title = res.data.title;
    } catch (err) {
      console.log(err);
    }
    
  }

}
