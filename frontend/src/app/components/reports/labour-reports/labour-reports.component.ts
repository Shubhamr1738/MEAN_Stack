import { Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabourReport } from '../models/labour';
import { LabourService } from './services/labour.service';

@Component({
  selector: 'app-labour-reports',
  templateUrl: './labour-reports.component.html',
  styleUrls: ['./labour-reports.component.css']
})
export class LabourReportsComponent implements OnInit {
  
    labours:any
    message: any;
   SiteID=localStorage.getItem('siteId')
    // @Output() messageEvent = new EventEmitter<any>();

  dataSource:any;

  displayedColumns: string[] = ['demo-nameofagency','demo-typeofagency', 'demo-Skill', 'demo-Unskill', 'demo-Workdone','demo-delete'];
    
    constructor(private labourDataService: LabourService,private fb:FormBuilder) { 
      
      this.labours = this.fb.group({
        nameOfAgency: [''],
        typeOfAgency: [''],
        skilled: [''],
        unskilled: [''],
        workDone: [''],
      });

    }
    onSubmit(){
      console.log(this.labours.value)
    }
    clickedRows = new Set<any>();
    ngOnInit(): void {
      console.log("this site id ",localStorage.getItem('siteId'))
      this.labourDataService.getallLabours(this.SiteID).subscribe(data => {

        console.log("get all labour data:",data);
        this.dataSource=data.data;
      });
      
    }
    
    addLabourReports() {
      console.log(this.labours.value)
      this.labourDataService.addLabourReports(this.labours.value,this.SiteID).subscribe(data=>{
        console.log("data added succesfully")
        this.labourDataService.getallLabours(this.SiteID).subscribe(data => {
          console.log(data);
          this.dataSource=data.data;
         
        });
      })
    // this.labourDataService.addLabourReports(this.labours.value).subscribe(
    // res => {console.log(res),this.labourDataService.getallLabours().subscribe(data => {

    //   console.log(data);
    //   console.log("added succesfully");
    //   this.dataSource=data.data;
    // });},
    // err => console.log(err)
    // );
    
  
    }
    delete(id:any){
      console.log(id)
      this.labourDataService.deletelabour(id,this.SiteID)
      .subscribe(
        
        data => {
          console.log(data),
          this.labourDataService.getallLabours(this.SiteID).subscribe(data => {

          console.log(data);
          this.dataSource=data.data;
        });},
        error => console.error(error)
      );
      console.log("DELETED SUCCESSFULLY ")
      
     
   
    // this.labourDataService.deletelabour(id).subscribe(() => {
    //   this.dataSource.data = this.dataSource.data.filter(
    //     (u: LabourReport) => u.id !== id,
    //   )
    // })

}
removeSelectedRows(){

}
updatelabour(){
  console.log("It Works")

}


}
