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
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/134748559_106057681327162_9118473089324164375_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=X2AhAfoxI0YAX8goCul&tp=1&oh=348ba7596efcdcb185d41ab0e72b6b3d&oe=6049A013'
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
      photo: 'https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/66420794_149456299494919_3409356351589086756_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=igmvZJXbQngAX844pga&tp=1&oh=6dca8955a4ee6ff2cbc62af59bff69d1&oe=604885AC'
    },
    {
      id: 5,
      name: 'https://www.instagram.com/narongrongrong/',
      role: 'range 1',
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/145484453_3247890781977527_1117817461792486398_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=gRlQ7ocUMMcAX-iziqy&tp=1&oh=92c03fd6944d44a645534f8cc0ccaad3&oe=60493FAD'
    },
    {
      id: 6,
      name: '',
      role: 'range 1',
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/146966756_878741756273951_8197061656979943171_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=9XWYI63jJckAX8N98b-&tp=1&oh=045f4a8d1152198b8f20d56d1cf907b5&oe=6048A812'
    },
    {
      id: 7,
      name: 'https://www.instagram.com/yehyiyi.jaline/',
      role: 'range 1',
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/145111705_721173548792376_6723463334987081438_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fShGyJXaFvsAX-AvFD1&tp=1&oh=8b5379ad7d44c5f70063498a667d5794&oe=604982C6'
    },
    {
      id: 8,
      name: 'https://www.instagram.com/8_jjini/',
      role: 'range 1',
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/144911413_2919592401642780_7768923501381819148_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=GY2aGcXDKTMAX_mvXMT&tp=1&oh=696b15b1d96f0643c9a24ad297e8f4dc&oe=60481509'
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
