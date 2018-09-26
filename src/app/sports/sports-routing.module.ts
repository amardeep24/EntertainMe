import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { SportsHeadlinesComponent } from './sports-headlines/sports-headlines.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SportsComponent,
    children: [
      {
        path: 'headlines',
        component: SportsHeadlinesComponent,
        canActivate: [AuthGuardService]
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
