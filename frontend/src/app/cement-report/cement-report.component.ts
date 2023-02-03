import { Component, OnInit } from '@angular/core';
import { CementReport } from '../models/cement';
import { CementService } from '../services/cement.service';

@Component({
  selector: 'app-cement-report',
  templateUrl: './cement-report.component.html',
  styleUrls: ['./cement-report.component.css']
})
export class CementReportComponent implements OnInit {
  cr=new CementReport()
  
  constructor(private cement:CementService) { }

  ngOnInit(): void {
  }
  cementReport(){
    console.log(this.cr)
    this.cement.SaveCement(this.cr).subscribe(
      (data:any)=>{
        //success
        console.log("cement r saved")
        console.log(data);

    },
    error=>console.log(error));
  }

}
