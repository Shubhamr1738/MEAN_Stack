import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CementService } from './services/cement.service';

@Component({
  selector: 'app-cement-reports',
  templateUrl: './cement-reports.component.html',
  styleUrls: ['./cement-reports.component.css']
})
export class CementReportsComponent implements OnInit {
cement:any;
cementData:any;
show=false;
@Input() SiteID:any

  constructor(private fb:FormBuilder,private cementService:CementService) { 
    this.cement = this.fb.group({
      openingBalance: [''],
      cementReceived: [''],
      totalStock: [''],
      consumptionToday: [''],
      closingBalance: [''],
    });

  }
  onSubmit(){
    console.log(this.cement.value)
    
  }

addCement(){
  this.cementService.addCement(this.cement.value,this.SiteID).subscribe(data=>{
    console.log("Cement Data has been added")
  })
}

  ngOnInit(): void {


  }
showData(){
  this.cementService.getCement(this.SiteID).subscribe(data=>{
    console.log("Cement Recieved",data)
this.cementData=data
  })
this.show=true
}
}
