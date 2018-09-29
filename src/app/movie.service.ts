import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from "./movie";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovieByTitle(title: string):Observable<Movie>{
    return this.http.get<Movie>(`https://www.omdbapi.com/?apikey=d4051203&t=${title}`);
  }
}
