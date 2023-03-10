import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SignupService} from "./services/signup.service"
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any
  constructor(private formBuilder: FormBuilder, private signupService: SignupService,private router:Router,private snackBar:MatSnackBar) { }
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
          if(this.userRole==='manager'){          
            this.router.navigate(['/managerHome']);
        }else{
          this.router.navigate(['/admin']);

        }
          this.snackBar.open('Superviser has been created Succesfully', '', {
            duration: 3000, 
            horizontalPosition: 'right', // Values can be 'start', 'center', 'end', or 'left', 'right'
          verticalPosition: 'top' // Values can be 'top', 'bottom'
          });
      }),
      catchError(error => {
          // do something with error
          return throwError(error.error.message);
      })
    ).subscribe();
  }


}
