import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RemarkService } from './services/remark.service';

@Component({
  selector: 'app-remarks-reports',
  templateUrl: './remarks-reports.component.html',
  styleUrls: ['./remarks-reports.component.css']
})
export class RemarksReportsComponent implements OnInit {
  remarks:any;
  @Input() SiteID:any

  constructor(private fb:FormBuilder,private remarkSerivice:RemarkService) { 

    this.remarks = this.fb.group({
      remarks: [''],
      
    });

  }
  onSubmit(){
    console.log(this.remarks.value)
  }
  ngOnInit(): void {
  }
addRemarks(){
  this.remarkSerivice.addRemarks(this.remarks.value).subscribe(data=>{
    console.log("remarks has been Added")
  })
}
}
