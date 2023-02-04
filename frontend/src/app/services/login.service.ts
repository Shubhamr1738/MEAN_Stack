import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { AuthData } from '../models/auth-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,private router:Router) { }
  private token:string;
  private tokenTimer:any;
  private authStatusListener =new Subject<boolean>();

  getToken() {
    return this.token;
  }

  
  loginUser(authData: AuthData) {
    this.http.post<{token:string,expiresIn:string}>('http://localhost:3000/user/login', authData)
    .subscribe({
      next:(response)=>{
        const token=response.token;
        this.token=token;
        this.router.navigate(['/admin']);
      }
    })
  }
}
