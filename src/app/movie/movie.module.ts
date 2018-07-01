import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MovieSearchComponent, MovieReviewComponent, MovieComponent]
})
export class MovieModule { }
