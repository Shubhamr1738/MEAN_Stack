import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminpopup',
  templateUrl: './adminpopup.component.html',
  styleUrls: ['./adminpopup.component.css']
})
export class AdminpopupComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AdminpopupComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,private adminServce:AdminService) 
     { }

adminUpdateForm:any


email: string;
username:string
role:string
password:string
companyName:string
fullName:string


  ngOnInit(): void {
    this.adminUpdateForm = this.fb.group({
      
      email: [''],  
      username:[''],
      role:[''],
      password:[''],
      companyName:[''],
      fullName:['']
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Do something with the form data
    console.log(this.companyName,this.fullName,this.role,this.username,this.email);
    console.log("in formbuilder",this.adminUpdateForm.value)

    this.adminServce.updateUser(this.adminUpdateForm.value).subscribe(data=>{
    console.log("data has been Updated SuccesFully")
    })
    this.dialogRef.close();
  }
  }
