import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialconService {
  private SiteId=localStorage.getItem('dailySiteId');

  constructor(private http : HttpClient) { }
// siteId=localStorage.getItem('siteId')

  addMaterialconsumption(data:any): Observable<any>{
    return this.http.post(`${URL}/form/addmaterialC/${this.SiteId}`,data);
  }

getmaterialConsuptionReports(): Observable<any>{
  return this.http.get(`${URL}/form/getmaterialC/${this.SiteId}`);
}
deleteMaterialConsuptions(id:any){
return this.http.delete(`${URL}/form/deletematerialC/${this.SiteId}/${id}`);
}
}
