import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportHomeService } from './services/report-home.service';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.css']
})
export class ReportsHomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private reportHomeService:ReportHomeService) { }
dates:any;
siteStatus:any
currentDate=new Date();
  ngOnInit(): void {
    this.dates = this.fb.group({
      site: [''],
      date: ['']
  
    });
   
  }
onSubmit(){
  console.log("date: ",this.dates.value)
  this.router.navigate(['/reports']);

}
confirmStatus(){
  console.log(this.siteStatus)
  this.reportHomeService.siteStatus(this.siteStatus);
}

}
