import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class CementService {
private siteId=localStorage.getItem('dailySiteId')
  constructor(private http :HttpClient) { }
  // SiteId=localStorage.getItem('siteId')
  getCement(): Observable<any>{
    return this.http.get(`${URL}/form/getcement/${this.siteId}`)
  }

addCement(data:any){
  return this.http.post(`${URL}/form/addcement/${this.siteId}`,data)
  
}
}
