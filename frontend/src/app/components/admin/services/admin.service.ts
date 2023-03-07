import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from '../../../../helper'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
 
  selectedUserId=localStorage.getItem('selectedUserId')
getusers(): Observable<any>{
  return this.http.get(`${URL}/user/getuser`)
}
deleteUser(id:any):Observable<any>{
  return this.http.delete(`${URL}/user/deleteuser/${id}`)
}
updateUser(userData:any){
  console.log("userid has been used",this.selectedUserId)
  return this.http.put(`${URL}/user/updateuser/${this.selectedUserId}`,userData)
}
}
