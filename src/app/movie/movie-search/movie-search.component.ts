import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../movie.service";
import { Movie } from "../../movie";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movie: Movie = new Movie;
  
  constructor(private movieService: MovieService, private router: Router) {
    
   }

  ngOnInit() {
  }
  getMovieByTitle(title: string){
    this.movieService.getMovieByTitle(title).subscribe(data=>{
      this.movie = data;
    });
  }
  reviewMovieVyTitle(title: string){
    this.router.navigate(['movie/review']);
  }

}
