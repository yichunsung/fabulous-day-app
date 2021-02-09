import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	hero: Hero[];

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  	this.getHeros();
  }

  getHeros(): void {
  	this.hero = this.signInService.getHeros();
  }

  check(): void {
  	console.log(this.hero);
  }

}
