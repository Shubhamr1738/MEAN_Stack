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
userRole=localStorage.getItem('role')
companyname = localStorage.getItem('companyName') !== "undefined" ? localStorage.getItem('companyName') : "";
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      username: [''],
      email: [''],
      password: [''],
      role: [''],
      companyName:[this.companyname]
    });

  }

  signupUser() {
    console.log("added data",this.signupForm.value)
    if(this.userRole==='manager'){
      this.signupForm.value.role='user'
    }
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
