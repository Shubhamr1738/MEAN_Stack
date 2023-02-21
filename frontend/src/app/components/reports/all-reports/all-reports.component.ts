import { Component, OnInit } from '@angular/core';
import { CementService } from '../cement-reports/services/cement.service';
import { LabourService } from '../labour-reports/services/labour.service';
import { MaterialconService } from '../material-consumption/services/materialcon.service';
import { MaterialService } from '../material-reports/services/material.service';
import { RemarkService } from '../remarks-reports/services/remark.service';
import { SiteService } from '../site/services/site.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {

  constructor(private siteService:SiteService,private labourService:LabourService,
    private cementService:CementService,private materialService:MaterialService,
    private materialConsuptionService:MaterialconService,private remarkService:RemarkService){}
siteData:any;
labourData:any;
cementData:any;
materialdata:any;
materialConsuptiondata:any;
remarkData:any
  ngOnInit(): void {
  }

}
