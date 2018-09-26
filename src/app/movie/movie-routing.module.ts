import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const ROUTES: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: 'review',
        component: MovieReviewComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'search',
        component: MovieSearchComponent,
        canActivate: [AuthGuardService]
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
