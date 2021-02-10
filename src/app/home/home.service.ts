import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor () { }

  getHomeData(): Promise<any> {
    return fetch('https://adata-api.elk-tree.site/api/page/home').then(res => res.json());
  }

}
