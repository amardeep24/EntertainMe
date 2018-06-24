import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { SportsHeadlinesComponent } from './sports-headlines/sports-headlines.component';

const routes: Routes = [
  {
    path: '',
    component: SportsComponent,
    children: [
      {
        path: 'headlines',
        component: SportsHeadlinesComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
