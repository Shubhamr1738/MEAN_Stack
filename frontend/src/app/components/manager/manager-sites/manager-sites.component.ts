import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ManagersiteService } from './services/managersite.service';

@Component({
  selector: 'app-manager-sites',
  templateUrl: './manager-sites.component.html',
  styleUrls: ['./manager-sites.component.css']
})
export class ManagerSitesComponent implements OnInit {

  constructor(private fb:FormBuilder,private managerSiteService:ManagersiteService) { }
sites:any;
  ngOnInit(): void {
    this.sites = this.fb.group({
      siteName: [''],
      
  
    });
  }
  saveSite(){
    console.log(this.sites.value)
    this.managerSiteService.addSitetoUser(this.sites.value).subscribe(data=>{
      console.log("Site has been saved for that user")
    })
  }

}
