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
  userId=localStorage.getItem('userId');
  userName=localStorage.getItem('userName');
  siteName:any;
startDate:any
formFillingDate:any

  constructor(private http:HttpClient) { }

  AddDailySite(sites:any): Observable<any> {
    console.log('Request is sent!');
    console.log("daily sites and dates :",sites)
    
    return this.http.post(`${URL}/form/${this.userName}/addsite`,sites)
  }

  getDailySiteData(){
    return this.http.get(`${URL}/form/getsitedata/${this.userName}`)

  }

  getallSites(): Observable<any>{
    return this.http.get(`${URL}/user/getsitedata/${this.userId}`)
  }
  deleteSite(id:any){
    return this.http.delete(`${URL}/user/${this.userId}/deletesitedata/${id}`)
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
  setSiteName(siteName:any){
    this.siteName=siteName;
    localStorage.setItem('selectedSiteName',siteName)
    

  }
  setStartDate(startDate:any){
    this.startDate=startDate
    localStorage.setItem('setStartDate',startDate)

  }
  getSiteName(){
    const siteName=localStorage.getItem('selectedSiteName')
    return siteName;
  }
  getStartDate(){
    const startDate=localStorage.getItem('setStartDate')
    return startDate;
  }
  setFormDate(date:any){
    this.formFillingDate=date
      }
      getFormDate(){
        return this.getFormDate
      }
}
