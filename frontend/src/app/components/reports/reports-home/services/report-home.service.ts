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
    
    siteStatus(status:any){
      return status;
    }
    getPendingDates():Observable<any>{
      return this.http.get(`${URL}/form/pending`)
    }
}
