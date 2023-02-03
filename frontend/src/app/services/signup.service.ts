import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  RegisterUserData(data:any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/signup', data);
  }
}
