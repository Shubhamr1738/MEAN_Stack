import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site';
import{SiteService} from '../services/site.service'
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}
}
