import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable()
export class AuthService {

  authenticated: boolean = false;

  constructor(private router: Router) { }

  signIn(username: string, password: string){
    if(this.authenticate(username,password)){
      this.authenticated = true;
    }
  }

  signOut(){
    this.authenticated = true;
    this.router.navigate(['/']);
  }

  signUp(user: User): boolean{
    window.localStorage.setItem("user", JSON.stringify(user));
    return true;
  }

  isAuthenticated():boolean{
    return this.authenticated;
  }

  private authenticate(username: string, password: string):boolean{
    let user = JSON.parse(window.localStorage.getItem("user"));
    if(username === user._username && password === atob(user._password)){
      return true;
    }
    return false;
  }

}
