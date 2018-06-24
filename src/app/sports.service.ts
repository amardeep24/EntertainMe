import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const API_KEY: string = "c51b87f4c8124aaca61f8e9da7420cab";

@Injectable()
export class SportsService {

  constructor(private http: HttpClient) { }

  getSportsHeadlines():Observable<any>{
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=${API_KEY}`);
  }
}
