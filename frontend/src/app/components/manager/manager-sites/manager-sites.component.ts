import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
userName:any
  ngOnInit(): void {
    this.userName=this.managerService.getSelectedUserName();

    this.sites = this.fb.group({
      siteName: [''],
      
  
    });
  }

  saveSite(){
    console.log(this.sites.value)
    this.managerSiteService.addSitetoUser(this.sites.value).subscribe(data=>{
      console.log("Site has been saved for that user")
      this.router.navigate(['/managerHome'])

    })
  }
  getSitebyUserName(){

  }

}
