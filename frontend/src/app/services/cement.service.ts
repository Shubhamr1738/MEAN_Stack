import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CementReport } from '../models/cement';
import { Observable } from 'rxjs';
import Url from '../helper';


@Injectable({
  providedIn: 'root'
})
export class CementService {

  constructor(private http:HttpClient) { }
  SaveCement(cr:CementReport): Observable<Object> {
    console.log('Request is sent!');
    console.log(cr)
    return this.http.post(`${Url}`,
    cr)
  }
}
