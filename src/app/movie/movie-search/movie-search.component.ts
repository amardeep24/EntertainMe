import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from "../../movie.service";
import { Movie } from "../../movie";
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { LoggerService } from '../../logger.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

  movie: Movie = new Movie;
  subscription: ISubscription;
  searchForm:FormGroup;
  searchSuggestion:string;
  

  constructor(private fb:FormBuilder, private movieService: MovieService, private router: Router, private log:LoggerService) {
    
   }

  ngOnInit() {
    this.createForm();
    this.setAutoSuggest();
  }
  getMovieByTitle(){
    let title = this.searchForm.get("searchQuery").value;
    this.subscription = this.movieService.getMovieByTitle(title).subscribe(data=>{
      this.movie = data;
    });
  }
  reviewMovieVyTitle(title: string){
    this.router.navigate(['movie/review']);
  }
  ngOnDestroy(){
    this.log.warn("Component ngOnDestroy Called", this.movie)
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  createForm(){
    this.searchForm = this.fb.group({
      searchQuery:["", Validators.minLength(3)]
   });
  }
  setSearchQueryValue(){
    this.searchForm.get("searchQuery").setValue(this.searchSuggestion);
  }
  setAutoSuggest(){
    this.searchForm.get("searchQuery").valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.movieService.getMovieByTitle(query))
    ).subscribe(data => this.searchSuggestion = data.Title);
  }

}
