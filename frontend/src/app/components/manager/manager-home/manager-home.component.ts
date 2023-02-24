import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service';
import { ManagersiteService } from '../manager-sites/services/managersite.service';
import { ManagerService } from './services/manager.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  dataSource:any
  constructor(private adminService:AdminService,private managserSiteService:ManagersiteService,private managerService:ManagerService) {}
  displayedColumns: string[] = ['demo-fullname', 'demo-email', 'demo-username','demo-password', 'demo-role',"demo-delete"];

  ngOnInit(): void {
    this.adminService.getusers().subscribe(data=>{

      this.dataSource=data.data
    })
  }

  deleteUser(userid:any){
    this.adminService.deleteUser(userid).subscribe(data=>{
      this.adminService.getusers().subscribe(data=>{
        this.dataSource=data.data
      })
    })

  }
  setUserId(userid:any,userName:any){
    this.managserSiteService.setUserId(userid);
    this.managerService.setSelectedUserName(userName);
    console.log("Username Passed")
    

  }
  
}
