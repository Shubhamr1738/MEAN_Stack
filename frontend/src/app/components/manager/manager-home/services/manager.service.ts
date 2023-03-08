import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }
userName:any
setSelectedUserNameandUserID(userName:any,userId:any){
    console.log(userName,"is assigned")
    localStorage.setItem('selectedUserName',userName)
    localStorage.setItem('selectedUserId',userId)

    this.userName=userName

  }
  getSelectedUserName(){
return this.userName
  }
  getUserForManager():Observable<any>{
    const companyName=localStorage.getItem('companyName')
    return this.http.get(`${URL}/user/getusersbyrole/user/${companyName}`)
  }


}
