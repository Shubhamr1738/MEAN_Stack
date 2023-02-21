import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialconService {

  constructor(private http : HttpClient) { }
// siteId=localStorage.getItem('siteId')

  addMaterialconsumption(data:any,siteId:any): Observable<any>{
    return this.http.post(`${URL}/form/addmaterialC/${siteId}`,data);
  }

getmaterialConsuptionReports(siteId:any): Observable<any>{
  return this.http.get(`${URL}/form/getmaterialC/${siteId}`);
}
deleteMaterialConsuptions(id:any,siteId:any){
return this.http.delete(`${URL}/form/deletematerialC/${siteId}/${id}`);
}
}
