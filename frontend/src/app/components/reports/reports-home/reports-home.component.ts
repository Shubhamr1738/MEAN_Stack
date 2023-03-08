import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { SiteService } from '../site/services/site.service';
import { ReportHomeService } from './services/report-home.service';
// import { Date } from '@angular/common';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private reportHomeService:ReportHomeService,private siteService:SiteService)
 {
    }


    }

  this.calendarDate = new Date();
  }


dates:any;
siteStatus:any
currentDate=new Date();
pendingDates:any
site:any
selectedPage:any
siteCreationDate:any

selectedDate: Date;

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    console.log("event.value",event.value)
  }


selectedDate: Date;

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    console.log("event.value",event.value)
  }

calendarDate: Date;



// onDateSelection(event: Event) {
//   const dateString = event.target.value;
//   const selectedDate = new Date(dateString);
//   console.log('Selected date:', selectedDate);
// }

  ngOnInit(): void {
    
    this.dates = this.fb.group({
      site:this.siteService.getSiteName(),
      date: ['']
  
    });
    this.siteCreationDate=this.siteService.getStartDate().substring(0, 10).split("-").reverse().join("-");
   console.log("StartDate: ",this.siteCreationDate)
    
   this.reportHomeService.getPendingDates(this.siteCreationDate,this.selectedPage).subscribe(data=>{
      console.log("Pending Dates",data)
      this.pendingDates=data.data
      console.log(this.pendingDates)
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
  console.log("Added date and name of site",this.dates.value)
  localStorage.setItem('dailySiteId',data.siteid)
  this.router.navigate(['/reports']);
})

}
setPendingDate(pendingdate:any){
  const site={
    "site":this.siteService.getSiteName(),
    "date":pendingdate
  }
  this.siteService.AddDailySite(site).subscribe(data=>{
    console.log("added pending date succesfully")
    this.reportHomeService.getPendingDates(this.siteCreationDate,this.selectedPage).subscribe(data=>{
      console.log("Pending Dates",data)
      this.pendingDates=data.data
    })
    this.router.navigate(['/reports']);

  })
  
}
ignorePendingDate(pendingDate:any){
  const site={
    "site":this.siteService.getSiteName(),
    "date":pendingDate
  }
  this.siteService.AddDailySite(site).subscribe(data=>{
    console.log("added pending date succesfully")
    this.reportHomeService.getPendingDates(this.siteCreationDate,this.selectedPage).subscribe(data=>{
      console.log("Pending Dates",data)
      this.pendingDates=data.data
    })

  })

}
getSelectedPage(){

  
}

}
