import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabourReport } from '../models/labour';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import URL from '../helper';
@Injectable({
  providedIn: 'root'
})
export class LabourService {
  private url = 'http://localhost:3000/addlabour/';
  private labourData: LabourReport[] = [];
  private labourDataUpdated = new Subject<LabourReport[]>();

  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute) { }

  form: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    skilled: [''],
    unskilled: [''],
    workDone: ['']
    });
    
    addLabourReports(labourData: LabourReport) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const id = this.route.snapshot.paramMap.get('id');
    this.form.patchValue({
    id: id,
    name: labourData.name,
    skilled: labourData.skilled,
    unskilled: labourData.unskilled,
    workDone: labourData.workDone
    });
    return this.http.post(`${this.url}${"63d2cc152cf69cd8c0147924"}`, this.form.value, { headers });
    }

    getallLabours(): Observable<any>{
        return this.http.get('http://localhost:3000/getlabour/63d2cc152cf69cd8c0147924/')
      }


      deletelabour(id:any):Observable<any>{
        return this.http.delete(`${URL}/delete/${id}`)
      }
    }

