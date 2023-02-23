import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';
@Injectable({
  providedIn: 'root'
})
export class ManagersiteService {
  siteId:any;
  userId:any;
  constructor(private http:HttpClient) { }

  AddItems(sites:any): Observable<any> {
    console.log('Request is sent!');
    console.log(sites)
    return this.http.post(`${URL}/user/63e5006cfd764547ed08edc8/addsitedata`,sites)
  }

  addSitetoUser(sitedata:any){
    console.log("User Id",this.userId)
    return this.http.post(`${URL}/user/${this.userId}/addsitedata`,sitedata)

  }
  getallSites(): Observable<any>{
    return this.http.get(`${URL}/user/getsitedata/63f72118de354dcc09f73d39`)
  }
  deleteSite(id:any){
    return this.http.delete(`${URL}/user/63e5006cfd764547ed08edc8/deletesitedata/${id}`)
  }
  setSiteId(id:any){
    const siteId = localStorage.getItem('siteId');
    if(siteId==id){
      console.log("Id Exists")
      localStorage.removeItem('siteId')
      console.log("site id Removed")
      localStorage.setItem('siteId',id)
      console.log("Site Id saved")
    }
    else{
      console.log("Not present")
      localStorage.setItem('siteId',id);
      console.log("Site Id saved")
    }

  }
  getSiteId(): Observable<any>{
    this.siteId =localStorage.getItem('siteId');
    return this.siteId;
  }
  setUserId(userId:any){
    this.userId=userId;
  }
}
