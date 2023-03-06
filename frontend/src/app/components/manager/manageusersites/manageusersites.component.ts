import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { ManagerpopupComponent } from '../managerpopup/managerpopup.component';
import { ManageusersitesService } from './services/manageusersites.service';

@Component({
  selector: 'app-manageusersites',
  templateUrl: './manageusersites.component.html',
  styleUrls: ['./manageusersites.component.css']
})
export class ManageusersitesComponent implements OnInit {

  constructor(private manageUserSiteService:ManageusersitesService,public dialog: MatDialog) { }

allUsersites:any
selectedUserName=localStorage.getItem('selectedUserName')
selectedSitedata:any
selectedUserId=localStorage.getItem('selectedUserId')
selectedUsersSiteData:any
selectedUserSiteName:any
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
  showData(selectedSiteDataName:any){
    localStorage.setItem('selectedSiteDataName',selectedSiteDataName)
    this.selectedUserSiteName=localStorage.getItem('selectedSiteDataName')
    this.manageUserSiteService.getSitedataByUserName(this.selectedUserName).subscribe(data=>{
      this.selectedUsersSiteData=data.data.filter(user=>user.site ===this.selectedUserSiteName);
      console.log("getSitebyUserName",this.selectedUsersSiteData)
    })
   

  }
  showDailyData(selectedDailySiteId:any){
    const siteId=localStorage.getItem('selectedDailySiteId')
    if(siteId){
      localStorage.removeItem('selectedDailySiteId')
      console.log('siteId is : removed and reassigned : ',siteId)
      localStorage.setItem('selectedDailySiteId',selectedDailySiteId)
      console.log("siteId has been re assigned to : ",selectedDailySiteId)
    }
    else{
      localStorage.setItem('selectedDailySiteId',selectedDailySiteId)
      console.log("siteId has been re assigned to : ",selectedDailySiteId)

    }
    
    localStorage.setItem('popupaction','showDailyData')
    const dialogRef = this.dialog.open(ManagerpopupComponent, {
      width: '500px'
    });
  
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
