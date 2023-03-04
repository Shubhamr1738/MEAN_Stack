import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';
@Injectable({
  providedIn: 'root'
})
export class ReportHomeService {

  constructor(private http:HttpClient) { }

    addDate(){}
    userName=localStorage.getItem('userName')
    siteStatus(status:any){
      return status;
    }
    getPendingDates(siteStartDate:any,page:any):Observable<any>{
      return this.http.get(`${URL}/form/pendingdate/${this.userName}/${siteStartDate}/1`)
    }
    
}
