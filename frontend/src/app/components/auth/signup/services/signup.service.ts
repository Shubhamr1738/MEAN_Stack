import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  RegisterUserData(data:any): Observable<any> {
    console.log(data)
    return this.http.post<any>(`${URL}/user/signup`, data);
  }
}
