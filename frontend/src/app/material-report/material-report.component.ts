import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material.service';
import{Material} from '../models/material'

@Component({
  selector: 'app-material-report',
  templateUrl: './material-report.component.html',
  styleUrls: ['./material-report.component.css']
})
export class MaterialReportComponent implements OnInit {
  mr=new Material()
  constructor(private materialservice:MaterialService) { }

  ngOnInit(): void {
  }
  materialReport(){
    console.log(this.mr)
  }

}
