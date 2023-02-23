import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service';
import { ManagersiteService } from '../manager-sites/services/managersite.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  dataSource:any
  constructor(private adminService:AdminService,private managserSiteService:ManagersiteService) {}
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
  setUserId(userid:any){
    this.managserSiteService.setUserId(userid);
    

  }
}
