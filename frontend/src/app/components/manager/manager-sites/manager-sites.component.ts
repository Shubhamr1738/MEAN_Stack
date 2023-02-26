import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManagerService } from '../manager-home/services/manager.service';
import { ManagersiteService } from './services/managersite.service';

@Component({
  selector: 'app-manager-sites',
  templateUrl: './manager-sites.component.html',
  styleUrls: ['./manager-sites.component.css']
})
export class ManagerSitesComponent implements OnInit {

  constructor(private fb:FormBuilder,private managerSiteService:ManagersiteService,private managerService:ManagerService,private router:Router) { }
sites:any;
userInfo:any;
userName=localStorage.getItem('selectedUserName')
allUserSites:any
selectedSitedata:any
selectedUserId=localStorage.getItem('selectedUserId')

  ngOnInit(): void {

    this.sites = this.fb.group({
      siteName: [''],
      
  
    });
    this.managerSiteService.getSiteByUserId(this.selectedUserId).subscribe(data=>{
      this.allUserSites=data.data
      console.log(data)

    })

    
  }

  saveSite(){
    console.log(this.sites.value)
    this.managerSiteService.addSitetoUser(this.sites.value).subscribe(data=>{
      console.log("Site has been saved for that user")
      this.managerSiteService.getSiteByUserId(this.selectedUserId).subscribe(data=>{
        this.allUserSites=data.data
        console.log(data)
  
      })

    })
  }
  getSitebyUserName(){
  this.managerSiteService.getSitedataByUserName(this.userName).subscribe(data=>{
    this.selectedSitedata=data.data
    console.log(this.selectedSitedata)
  })

  }
  deleteSite(siteId:any){
    this.managerSiteService.deleteSitebyUserId(siteId).subscribe(data=>{
      Swal.fire({  
       
        icon: 'success',  
        title: 'Site has been Deleted Succesfully',  
        showConfirmButton: true,  
         
      })  
      this.managerSiteService.getSiteByUserId(this.selectedUserId).subscribe(data=>{
        this.allUserSites=data.data
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
