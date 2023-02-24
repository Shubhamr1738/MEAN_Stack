import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SignupService} from "./services/signup.service"
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any
  constructor(private formBuilder: FormBuilder, private signupService: SignupService,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      username: [''],
      email: [''],
      password: [''],
      role: [''],
      companyName:['']

     
    });
    
  }

  signupUser() {
    console.log(this.signupForm.value)
    this.signupService.RegisterUserData(this.signupForm.value)
    .pipe(
      map(res => {
          console.log(res);
          // do something with successful response
          this.router.navigate(['/admin']);
      }),
      catchError(error => {
          // do something with error
          return throwError(error.error.message);
      })
    ).subscribe();
  }


}
