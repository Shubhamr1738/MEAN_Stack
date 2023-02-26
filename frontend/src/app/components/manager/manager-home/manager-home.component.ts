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

      // this.dataSource=data.data
      this.dataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'user');

    })
    
  }
  // getUserData(dataSource:any) {
  //   let i = 0;
  //   return dataSource.filter(data => data.role === 'user')
  //                    .map(data => ({...data, id: i++}));
  // }
  deleteUser(userid:any){
    this.adminService.deleteUser(userid).subscribe(data=>{
      this.adminService.getusers().subscribe(data=>{
        this.dataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'user');
      })
    })

  }
  setUserId(userid:any,userName:any){
    this.managserSiteService.setUserId(userid);
    this.managerService.setSelectedUserName(userName);
    console.log("Username Passed")
    

  }
  
}
