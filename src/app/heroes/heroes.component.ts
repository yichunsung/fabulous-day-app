import { Component, OnInit, NgModule } from '@angular/core';
import { Hero } from '../hero';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	party = 'Hello Party';
  pageName: string = '';
  heroVal: any = 'asds';
	heroList: Hero[] = [
    {
      id: 1,
      name: '芳根京子',
      role: 'range 1',
      photo: 'https://pbs.twimg.com/media/EtHar4nU0AI1J8p?format=jpg&name=large'
    },
    {
      id: 2,
      name: '堀田真由',
      role: 'range 1',
      photo: 'https://pbs.twimg.com/media/EsLTOA8VQAQXUGt?format=jpg&name=large'
    },
    {
      id: 3,
      name: 'milet',
      role: 'range 1',
      photo: 'https://pbs.twimg.com/media/Eqe310NUUAA7jyw?format=jpg&name=large'
    },
    {
      id: 4,
      name: '飯豊 まりえ',
      role: 'range 1',
      photo: 'https://pbs.twimg.com/media/DZmwMH5VoAE0bmH?format=jpg&name=large'
    },
  ];

  ngOnInit(): void {
    this.pageName = 'Hero Page';
  }

  show(): void {
    console.log(this.party);
    console.log(this.heroVal);
    this.pageName = this.pageName === 'Hello Party' ? 'Oh yoyoy' : this.party;
  }

}
