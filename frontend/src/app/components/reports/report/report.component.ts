import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabourReportsComponent } from '../labour-reports/labour-reports.component';
import { LabourService } from '../labour-reports/services/labour.service';
import { SiteService } from '../site/services/site.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit  {

  constructor(private siteService:SiteService,private route:ActivatedRoute) { }
  SiteID:any;
  SiteData:any
  siteDate:any;
  labourData:any;
  cementData:any;
  materialConsuptionData:any;
  materialdata:any;
  remarkaData:any;

  // @ViewChild(LabourReportsComponent) child:any;


  ngOnInit(): void {
  
    // this.SiteID = this.route.snapshot.params['siteId'];
    // this.siteService.setSiteId(this.SiteID);
    this.SiteData=this.siteService.getSiteName()
    this.siteDate=this.siteService.getStartDate()
    
  }
  
 
}
