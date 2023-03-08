import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { AdminService } from '../../admin/services/admin.service';
import { ManageusersitesService } from '../manageusersites/services/manageusersites.service';

@Component({
  selector: 'app-managerpopup',
  templateUrl: './managerpopup.component.html',
  styleUrls: ['./managerpopup.component.css']
})
export class ManagerpopupComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<ManagerpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private adminServce:AdminService,private manageUserSiteService:ManageusersitesService) 
    { }

adminUpdateForm:any
popupaction=localStorage.getItem('popupaction')

email: string;
username:string
role:string
password:string
companyName:string
fullName:string
selectedUsersSiteData:any
selectedUserName=localStorage.getItem('selectedUserName')
selectedUserSiteName=localStorage.getItem('selectedUserSiteName')



 ngOnInit(): void {
   this.adminUpdateForm = this.fb.group({
     
     email: [''],  
     username:[''],
     role:[''],
     password:[''],
     companyName:[''],
     fullName:['']
   });
   this.manageUserSiteService.getDailySiteById().subscribe(data=>{
    this.selectedUsersSiteData=data
    console.log("getSitebyUserName from popup",this.selectedUsersSiteData)
  })
  
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