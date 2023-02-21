import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportHomeService {

  constructor(private http:HttpClient) { }

    addDate(){}
    
    siteStatus(status:any){
      return status;
    }
}
