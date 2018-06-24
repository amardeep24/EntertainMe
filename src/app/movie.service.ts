import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from "./movie";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovieByTitle(title: string):Observable<Movie>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Movie>(`http://${window.location.hostname}:8070/getMovieByTitle?title=${title}`,{
      headers: headers 
    });
  }
}
