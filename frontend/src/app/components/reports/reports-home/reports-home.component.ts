import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from '../site/services/site.service';
import { ReportHomeService } from './services/report-home.service';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private reportHomeService:ReportHomeService,private siteService:SiteService) { }
dates:any;
siteStatus:any
currentDate=new Date();
pendingDates:any
site:any
  ngOnInit(): void {
    this.dates = this.fb.group({
      siteName:this.siteService.getSiteName(),
      date: ['']
  
    });
    this.reportHomeService.getPendingDates().subscribe(data=>{
      console.log("Pending Dates",data)
      this.pendingDates=data.dates
    })
   
  }
onSubmit(){
  console.log("date: ",this.dates.value)
  this.router.navigate(['/reports']);

}
confirmStatus(){
  console.log(this.siteStatus)
  this.reportHomeService.siteStatus(this.siteStatus);
}

setSiteNameandDate(){
this.siteService.AddDailySite(this.dates.value).subscribe(data=>{
  console.log("Added date and name of site")
  localStorage.setItem('dailySiteId',data.siteid)
  this.router.navigate(['/reports']);
})

}
setPendingDate(pendingdate:any){
  const site={
    "siteName":this.siteService.getSiteName(),
    "date":pendingdate
  }
  this.siteService.AddDailySite(site).subscribe(data=>{
    console.log("added pending date succesfully")
    this.reportHomeService.getPendingDates().subscribe(data=>{
      console.log("Pending Dates",data)
      this.pendingDates=data.dates
    })
    this.router.navigate(['/reports']);

  })
}

}
