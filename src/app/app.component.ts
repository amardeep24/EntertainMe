import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient){

  }
  getUserId(username: string){
    this.http.post(`http://localhost:8040/Movie/user?username=${username}`);
  }
}
