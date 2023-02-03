import { Injectable } from '@angular/core';
import { Site } from '../models/site';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import URL from '../helper';
@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http:HttpClient) { }
  AddItems(sites:Site): Observable<any> {
    console.log('Request is sent!');
    console.log(sites)
    return this.http.post(`${URL}/user/addsite/`,
    sites)
  }
}
