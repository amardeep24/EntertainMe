import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup =this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  result: {status: boolean, message: string} 

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(){
    console.log("Sign In");
    let isLoggedIn = this.authService.signIn(this.signInForm.controls.username.value, this.signInForm.controls.password.value);
    this.result = isLoggedIn ? {status: true, message: ""} : {status: false, message: "Invalid credentials"}
  }

}
