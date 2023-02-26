import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http:HttpClient) { }
  private siteId=localStorage.getItem('dailySiteId')

  getMaterials(): Observable<any>{
    return this.http.get(`${URL}/form/getmaterial/${this.siteId}`)
  }
  addMaterials(data:any): Observable<any>{
    return this.http.post(`${URL}/form/addmaterial/${this.siteId}`,data)
  }

  deleteMaterials(id:any): Observable<any>{

    return this.http.delete(`${URL}/form/deletematerial/${this.siteId}/${id}`,id)
  }
}
