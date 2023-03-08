import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class ManageusersitesService {

  constructor(private http:HttpClient) { }

  selectedUserId=localStorage.getItem('selectedUserId')
  selectedDailySiteId=localStorage.getItem('selectedDailySiteId')

  getallSites(selectedUserId:any): Observable<any>{
    return this.http.get(`${URL}/user/getsitedata/${selectedUserId}`)
  }

  getSitedataByUserName(userName:any):Observable<any>{
    return this.http.get(`${URL}/form/getsitebyuname/${userName}`)
  }
  deleteSelectedSite(siteId:any){
    return this.http.delete(`${URL}/user/${this.selectedUserId}/deletesitedata/${siteId}`)

  }
  deleteDailySites(siteId:any){
    return this.http.delete(`${URL}/form/deletesite/${siteId}`)

  }
  getDailySiteById():Observable<any>{
    const siteId=localStorage.getItem('selectedDailySiteId')
    console.log("siteId has been re assigned to : ",siteId)

    return this.http.get(`${URL}/form/getsite/${siteId}`)
  }
}
