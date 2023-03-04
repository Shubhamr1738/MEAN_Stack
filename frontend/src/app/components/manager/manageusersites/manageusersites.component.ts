import { Component, OnInit } from '@angular/core';
import { ManageusersitesService } from './services/manageusersites.service';

@Component({
  selector: 'app-manageusersites',
  templateUrl: './manageusersites.component.html',
  styleUrls: ['./manageusersites.component.css']
})
export class ManageusersitesComponent implements OnInit {

  constructor(private manageUserSiteService:ManageusersitesService) { }

allUsersites:any
selectedUserName=localStorage.getItem('selectedUserName')
selectedSitedata:any
selectedUserId=localStorage.getItem('selectedUserId')


  ngOnInit(): void {
    this.manageUserSiteService.getallSites(this.selectedUserId).subscribe(data=>{
      this.allUsersites=data.data
      console.log("data is assigned",this.allUsersites)
    })
    console.log("selectedUserId: ",localStorage.getItem('selectedUserId'))
  }

  getSitebyUserName(){

    this.manageUserSiteService.getSitedataByUserName(this.selectedUserName).subscribe(data=>{
      this.selectedSitedata=data.data
      console.log("getSitebyUserName",this.selectedSitedata)
    })
  }
  getSiteByUserId(){
    this.manageUserSiteService.getallSites(this.selectedUserId).subscribe(data=>{
      this.selectedSitedata=data.data

    })
  }

  deleteSite(slectedSiteId:any){
    this.manageUserSiteService.deleteSelectedSite(slectedSiteId).subscribe(data=>{
    console.log("Site deleted Succesfully")
    this.manageUserSiteService.getallSites(this.selectedUserId).subscribe(data=>{
      this.allUsersites=data.data
      console.log("data is assigned",this.allUsersites)
    })
    })

  }


}
