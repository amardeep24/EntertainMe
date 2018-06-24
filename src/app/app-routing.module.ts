import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'movie',
    loadChildren: 'app/movie/movie.module#MovieModule'
  },
  {
    path: 'sports',
    loadChildren: 'app/sports/sports.module#SportsModule'
  },
  {
    path: '',
    redirectTo: '/movie',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
