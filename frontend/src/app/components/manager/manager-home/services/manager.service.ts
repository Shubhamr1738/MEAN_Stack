import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }
userName:any
  setSelectedUserName(userName:any){
    console.log(userName,"is assigned")
this.userName=userName

  }
  getSelectedUserName(){
return this.userName
  }


}
