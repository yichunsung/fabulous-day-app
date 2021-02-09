import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  heroList: Hero[] = [
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
    {
      id: 9,
      name: 'https://www.instagram.com/nerunagahama_/',
      role: 'range 1',
      photo: 'https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121620845_790021841838120_376941791958992908_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Af7MyFBxZ-4AX80PLdK&tp=1&oh=c9b3868c65650cdb47f78189d7d4437e&oe=604B1DD7'
    },
  ]

  constructor() { }

  getHeros(): Hero[] {
    return this.heroList;
  }
}
