import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../../models/Site';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  siteId:any;
  constructor(private http:HttpClient) { }

  AddItems(sites:Site): Observable<any> {
    console.log('Request is sent!');
    console.log(sites)
    return this.http.post(`${URL}/form/vijay/addsite`,
    sites)
  }

  getallSites(){
    return this.http.get(`${URL}/form/getalldata`)
  }
  deleteSite(id:any){
    return this.http.delete(`${URL}/form/deletesite/${id}`)
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
      console.log("NOt present")
      localStorage.setItem('siteId',id);
      console.log("Site Id saved")
    }

  }
  getSiteId(){
    this.siteId =localStorage.getItem('siteId');
    return this.siteId;
  }
}
