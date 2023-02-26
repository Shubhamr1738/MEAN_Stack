import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  constructor(private http : HttpClient) { }
  private siteId=localStorage.getItem('dailythis.siteId')

  addRemarks(remarkData:any):Observable<any>{
    return this.http.post(`${URL}/form/addremarks/${this.siteId}`,remarkData)

  }
}
