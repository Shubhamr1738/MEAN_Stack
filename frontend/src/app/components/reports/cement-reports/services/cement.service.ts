import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class CementService {

  constructor(private http :HttpClient) { }
  // SiteId=localStorage.getItem('siteId')
  getCement(SiteID:any): Observable<any>{
    return this.http.get(`${URL}/form/getcement/${SiteID}`)
  }

addCement(data:any,SiteID:any){
  return this.http.post(`${URL}/form/addcement/${SiteID}`,data)
  
}
}
