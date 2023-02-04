import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthData } from '../models/auth-model';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  RegisterUserData(data:AuthData): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/signup', data);
  }
}
