import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
  });

  result: {status: boolean, message: string} 

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
  }

  signUp(){
    let user = new User();
    user.username = this.signUpForm.controls.username.value;
    user.password = this.signUpForm.controls.username.value;
    this.result = this.authService.signUp(user) ? {status: true, message: `User ${user.username} successfully registered`}
                  :{status: false, message: `User ${user.username} failed to be registered`};
  }

}
