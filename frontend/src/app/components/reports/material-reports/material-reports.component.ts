import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{MaterialConsuption} from '../models/materialReport'
import { MaterialService } from './services/material.service';
@Component({
  selector: 'app-material-reports',
  templateUrl: './material-reports.component.html',
  styleUrls: ['./material-reports.component.css']
})
export class MaterialReportsComponent implements OnInit {
  materials:any;
  materialDataSource:any


  displayedColumns: string[] = ['demo-materialReceived','demo-supplierName', 'demo-quality', 'demo-billNo', 'demo-amount','demo-paid','demo-time','demo-action'];
  clickedRows = new Set<any>();


  constructor(private fb:FormBuilder,private materialService:MaterialService) { 

    this.materials = this.fb.group({
      materialReceived: [''],
      supplierName: [''],
      quality: [''],
      billNo: [''],
      amount: [''],
      paid  : [''],
      time: [''],
    });

  }
  onSubmit(){
    console.log(this.materials.value)
  }
  addMaterials(){
    this.materialService.addMaterials(this.materials.value).subscribe(data=>{
      console.log("material has been Added",data);
      this.materialDataSource=data
      this.materialService.getMaterials().subscribe(data=>{
        console.log("Materials Recieved",data)
        this.materialDataSource=data.data;
      })
    })
  }

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data=>{
      console.log("Materials Recieved",data)
      this.materialDataSource=data.data;
    })
  }
  delete(id:any){

    this.materialService.deleteMaterials(id).subscribe(data=>{
      console.log("data Deleted Succesfully")

      this.materialService.getMaterials().subscribe(data=>{
        console.log("Materials Recieved",data)
        this.materialDataSource=data.data;
      })
    })
  }

}
