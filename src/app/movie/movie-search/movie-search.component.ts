import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from "../../movie.service";
import { Movie } from "../../movie";
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

  movie: Movie = new Movie;
  subscription: ISubscription;

  constructor(private movieService: MovieService, private router: Router) {
    
   }

  ngOnInit() {
  }
  getMovieByTitle(title: string){
    this.subscription = this.movieService.getMovieByTitle(title).subscribe(data=>{
      this.movie = data;
    });
  }
  reviewMovieVyTitle(title: string){
    this.router.navigate(['movie/review']);
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
