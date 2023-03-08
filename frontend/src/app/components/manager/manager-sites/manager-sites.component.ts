import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin/services/admin.service';
import { ManagerService } from '../manager-home/services/manager.service';
import { ManagersiteService } from './services/managersite.service';

@Component({
  selector: 'app-manager-sites',
  templateUrl: './manager-sites.component.html',
  styleUrls: ['./manager-sites.component.css']
})
export class ManagerSitesComponent implements OnInit {

  constructor(private fb:FormBuilder,private managerSiteService:ManagersiteService,private managerService:ManagerService,private router:Router,private adminService:AdminService) { }
sites:any;
userName=localStorage.getItem('selectedUserName')
allUserSites:any
selectedSitedata:any
selectedUserId=localStorage.getItem('selectedUserId')
ManagerSites:any
assigningSite:any;
allUserData:any

  ngOnInit(): void {

    this.sites = this.fb.group({
      siteName: [''],
      
  
    });
    this.adminService.getusers().subscribe(data=>{

      this.allUserData=data.data
      console.log("data user ",this.allUserData)
      this.allUserData = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'user');

    })
    
    this.managerSiteService.getManagerSites().subscribe(data=>{
      this.ManagerSites=data.data
      console.log(data)

    })
   
  }

  saveSite(){
    console.log(this.sites.value)
    this.managerSiteService.addSitetoManager(this.sites.value).subscribe(data=>{
      console.log("Site has been saved for that user")
      this.managerSiteService.getManagerSites().subscribe(data=>{
        this.ManagerSites=data.data
        console.log(data)
  
      }) 
      Swal.fire({
        icon: 'success',
        title: 'Site has been Added Successfully',
                
      })
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Something went Wrong',
        text: 'Please try again',
        
      })
    })
    
  }
  assignSite(siteId:any){
this.assigningSite=siteId
  }
  addSiteToUser(userId:any,userName){
    this.managerSiteService.addSitetoUser(this.assigningSite,userId).subscribe(data=>{
      console.log("Site is assigned to user")
      Swal.fire({
        icon: 'success',
        title: `Site has been assigned to ${userName}`,
        text: 'Site assigned Succesfully',
        
      })
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Something went Wrong',
        text: 'Please try again',
        
      })
    })
      
  }
  // getManagerSites(){
  //   this.managerSiteService.getManagerSites().subscribe(data=>{
  //     this.ManagerSites=data.data
  //     console.log(data)

  //   })


  // }


  

  

  deleteSite(siteId:any){
    this.managerSiteService.deleteSitebyUserId(siteId).subscribe(data=>{
      Swal.fire({  
       
        icon: 'success',  
        title: 'Site has been Deleted Succesfully',  
        showConfirmButton: true,  
         
      })  
      this.managerSiteService.getManagerSites().subscribe(data=>{
        this.ManagerSites=data.data
        console.log(data)
  
      })

    })

  }

  deleteByDates(siteId:any){
    this.managerSiteService.deletebysiteId(siteId).subscribe(data=>{
      
      this.managerSiteService.getSitedataByUserName(this.userName).subscribe(data=>{
        this.selectedSitedata=data.data
        console.log(this.selectedSitedata)
      })
    })

  }
}
