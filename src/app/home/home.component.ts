import { Component, OnInit } from '@angular/core';
// Constant
import { mrt } from '../mrt-data.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	list = mrt;
	title = 'fabulous day';
  constructor() { }

  ngOnInit(): void {
  }

}
