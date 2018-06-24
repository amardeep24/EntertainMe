import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieComponent } from './movie/movie.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: 'review',
        component: MovieReviewComponent
      },
      {
        path: 'search',
        component: MovieSearchComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
