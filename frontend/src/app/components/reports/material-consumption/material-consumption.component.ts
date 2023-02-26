import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MaterialconService } from './services/materialcon.service';

@Component({
  selector: 'app-material-consumption',
  templateUrl: './material-consumption.component.html',
  styleUrls: ['./material-consumption.component.css']
})
export class MaterialConsumptionComponent implements OnInit {
  materialsconsuption:any;
materialConsuptionData:any;


  constructor(private fb:FormBuilder,private materialConsuptionService:MaterialconService) { 

    this.materialsconsuption = this.fb.group({
      activityName: [''],
      consumptionMaterial: [''],
      consumptionQuantity: [''],
      consumptionUnit: [''],
    });

  }


  displayedColumns: string[] = ['demo-activityName','demo-consumptionMaterial', 'demo-consumptionQuantity', 'demo-consumptionUnit','demo-action'];
  clickedRows = new Set<any>();

  onSubmit(){
    console.log(this.materialsconsuption.value)
  }
  ngOnInit(): void {
    this.materialConsuptionService.getmaterialConsuptionReports().subscribe(data=>{
      console.log("Materialconsption  recieved");
      this.materialConsuptionData=data.data

    })
  }

  addMaterialConsuption(){
    this.materialConsuptionService.addMaterialconsumption(this.materialsconsuption.value).subscribe(data=>{
      console.log("Material Consuption data has been added")
      
      this.materialConsuptionService.getmaterialConsuptionReports().subscribe(data=>{
        console.log("Materialconsption  recieved");
        this.materialConsuptionData=data.data
  
      })
    })
  }

  deleteMaterialConsuptionData(id:any){

this.materialConsuptionService.deleteMaterialConsuptions(id).subscribe(data=>{
  console.log("Materal Consuption Data has been deleted");

  this.materialConsuptionService.getmaterialConsuptionReports().subscribe(data=>{
    console.log("Materialconsption  recieved");
    this.materialConsuptionData=data.data

  });
})
  }

}
