import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hero',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
