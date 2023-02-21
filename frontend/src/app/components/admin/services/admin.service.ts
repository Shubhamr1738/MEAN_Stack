import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from '../../../../helper'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

getusers(): Observable<any>{
  return this.http.get(`${URL}/user/getuser`)
}
deleteUser(id:any):Observable<any>{
  return this.http.delete(`${URL}/user/deleteuser/${id}`)
}
}
