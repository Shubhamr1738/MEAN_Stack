import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CementService } from '../cement-reports/services/cement.service';

import { CementService } from '../cement-reports/services/cement.service';

import { LabourReportsComponent } from '../labour-reports/labour-reports.component';
import { LabourService } from '../labour-reports/services/labour.service';
import { MaterialconService } from '../material-consumption/services/materialcon.service';
import { MaterialService } from '../material-reports/services/material.service';
import { RemarkService } from '../remarks-reports/services/remark.service';
import { SiteService } from '../site/services/site.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit  {

  constructor(private siteService:SiteService,private route:ActivatedRoute,private labourService:LabourService,
    private cementService:CementService,private materialService:MaterialService,private materialConsuptionService:MaterialconService,
    private remarkService:RemarkService) { }
  SiteID:any;
  SiteData:any
  siteDate:any;

  labourData:any
cementData:any
materialData:any;
materialConsptionData:any;
remarkData:any;


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

    this.SiteID=localStorage.getItem('dailySiteId')
    this.labourService.getallLabours(this.SiteID).subscribe(data=>{
      this.labourData=data.data
    })

    this.cementService.getCement().subscribe(data=>{
      this.cementData=data
    })

    this.materialService.getMaterials().subscribe(data=>{
          this.materialData=data.data
    })

    this.materialConsuptionService.getmaterialConsuptionReports().subscribe(data=>{
      this.materialConsptionData=data.data
    })

    this.remarkService.getRemarks().subscribe(data=>{
      this.remarkData=data
    })


  }
  
 
}
