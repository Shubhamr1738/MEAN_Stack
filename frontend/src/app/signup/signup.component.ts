//component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private signupService: SignupService,
    private router: Router
  ) { 
    this.signupForm = new FormGroup({});
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      site: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  signupUser() {
    console.log(this.signupForm.value);
    this.signupService.RegisterUserData(this.signupForm.value)
      .pipe(
        map(res => {
          console.log(res);
          this.router.navigate(['/admin']);
        }),
        catchError(error => {
          return throwError(error.error.message);
        })
      ).subscribe();
  }
}
