import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  constructor(private http : HttpClient) { }
  // siteId=localStorage.getItem('siteId')
  addRemarks(remarkData:any,siteId:any):Observable<any>{
    return this.http.post(`${URL}/form/addremarks/${siteId}`,remarkData)

  }
}
