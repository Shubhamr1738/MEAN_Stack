import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabourService } from '../labour-reports/services/labour.service';
import { SiteService } from '../site/services/site.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private siteService:SiteService,private route:ActivatedRoute) { }
  SiteID:any;
  ngOnInit(): void {
  
    // this.SiteID = this.route.snapshot.params['siteId'];
    // this.siteService.setSiteId(this.SiteID);
  }
 
}
