import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http:HttpClient) { }
// siteId=localStorage.getItem('siteId')

  getMaterials(siteId:any): Observable<any>{
    return this.http.get(`${URL}/form/getmaterial/${siteId}`)
  }
  addMaterials(data:any,siteId:any): Observable<any>{
    return this.http.post(`${URL}/form/addmaterial/${siteId}`,data)
  }

  deleteMaterials(id:any,siteId:any): Observable<any>{

    return this.http.delete(`${URL}/form/deletematerial/${siteId}/${id}`,id)
  }
}
