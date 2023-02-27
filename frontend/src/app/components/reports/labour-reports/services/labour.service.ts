import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import{LabourReport} from '../../models/labour'
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class LabourService {
  private url = 'http://localhost:3000/form/addlabour/';
  private userId=localStorage.getItem('userId');
  private SiteId=localStorage.getItem('dailySiteId');

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


   
  addLabourReports(labourData: any,id:any): Observable<any> {
        return this.http.post(`${URL}/form/addlabour/${this.SiteId}`,labourData)
    }

    getallLabours(SiteId:any): Observable<any>{
      console.log("Service Site ID:",SiteId)
        return this.http.get(`${URL}/form/getlabour/${this.SiteId}`)
      }


      deletelabour(id:number,SiteId:any):Observable<any>{
        return this.http.delete(`${URL}/form/deletelabour/${this.SiteId}/${id}`)
      }
      
    updatelabour(id:number,body:LabourReport): Observable<any>{
      return this.http.put(`${URL}/form/ulabopur/${id}`,body)
    }
}
