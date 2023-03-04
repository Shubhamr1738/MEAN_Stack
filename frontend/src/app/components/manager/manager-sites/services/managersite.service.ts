import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';
@Injectable({
  providedIn: 'root'
})
export class ManagersiteService {
  siteId:any;
  userId=localStorage.getItem('selectedUserId')
  managerUserId=localStorage.getItem('userId')
  constructor(private http:HttpClient) { }

  addSitetoUser(sitedata:any,userId:any){
    console.log("User Id",this.userId)
    return this.http.post(`${URL}/user/${userId}/addsitedata`,sitedata)

  }
  addSitetoManager(sitedata:any){
    return this.http.post(`${URL}/user/${this.managerUserId}/addsitedata`,sitedata)

  }
  getManagerSites():Observable<any>{
    return this.http.get(`${URL}/user/getsitedata/${this.managerUserId}`)

    
  }
  

  getSiteByUserId(userId:any):Observable<any>{
    return this.http.get(`${URL}/user/getsitedata/${userId}`)
  }
  getSitedataByUserName(userName:any):Observable<any>{
    return this.http.get(`${URL}/form/getsitebyuname/${userName}`)
  }

  deleteSitebyUserId(id:any){
    return this.http.delete(`${URL}/user/${this.managerUserId}/deletesitedata/${id}`)
  }
deletebysiteId(siteId:any){
  return this.http.delete(`${URL}/form/deletesite/${siteId}`)

}
  getSiteId(): Observable<any>{
    this.siteId =localStorage.getItem('siteId');
    return this.siteId;
  }
  
 
}
