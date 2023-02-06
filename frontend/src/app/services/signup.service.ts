import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  RegisterUserData(data:any): Observable<any> {
    console.log(data)
    return this.http.post<any>('http://localhost:3000/user/signup', data);
  }
}
