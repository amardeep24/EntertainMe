import { HomeComponent } from './home/home/home.component';
 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

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
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [AuthModule,HomeModule, RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
