import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  


}
