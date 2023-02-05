import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthData } from '../models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient,private router:Router) { }
  private token:string;

  getToken() {
    return this.token;
  }

  loginUserData(authData: AuthData) {
    this.http.post<{token:string,expiresIn:string}>('http://localhost:3000/user/login', authData)
    .subscribe({
      next:(response)=>{
        console.log(response)
        const token=response.token;
        this.token=token;
        this.router.navigate(['/home']);
      }
  })
}}
