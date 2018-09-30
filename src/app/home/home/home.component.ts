import { StorageService } from './../../shared/storage-service.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private storageService:StorageService) { }
  movies: Observable<any>;
  
  ngOnInit() {
    this.movies = this.storageService.getSavedItem('movies');
  }

  isAuthenticated():boolean{
    return this.authService.isAuthenticated();
  }

}
