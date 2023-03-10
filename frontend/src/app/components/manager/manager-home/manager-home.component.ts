import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin/services/admin.service';
import { ManagersiteService } from '../manager-sites/services/managersite.service';
import { ManagerpopupComponent } from '../managerpopup/managerpopup.component';
import { ManagerService } from './services/manager.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  dataSource:any
  constructor(private adminService:AdminService,private managserSiteService:ManagersiteService,
    private managerService:ManagerService,public dialog: MatDialog) {}
    
  displayedColumns: string[] = ['demo-fullname', 'demo-email', 'demo-username','demo-password', 'demo-role',"demo-delete"];

  ngOnInit(): void {
    

    // this.adminService.getusers().subscribe(data=>{

    //   // this.dataSource=data.data
    //   this.dataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'user');

    // })
    this.managerService.getUserForManager().subscribe(data=>{
      // console.log("Manager Users",data)
      this.dataSource=data
    })
    
  }
  // getUserData(dataSource:any) {
  //   let i = 0;
  //   return dataSource.filter(data => data.role === 'user')
  //                    .map(data => ({...data, id: i++}));
  // }
  deleteUser(userid:any){
    this.adminService.deleteUser(userid).subscribe(data=>{
      this.managerService.getUserForManager().subscribe(data=>{
        // console.log("Manager Users",data)
        this.dataSource=data
      })
      
        Swal.fire({
          icon: 'success',
          title: 'Deleted Succesfully',
          text: 'Data has been Deleted Succesfully',
          
        })
    },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: 'Please try again',
          
        })
    })

  }
  saveSelectedData(userid:any,userName:any){
    console.log("seleced user ID: ",userid)
    // this.managserSiteService.setUserId(userid);
    this.managerService.setSelectedUserNameandUserID(userName,userid);
    console.log("Username Passed")
    

  }
  updateUser(userId:any){
    localStorage.setItem('selectedUserId',userId)
    localStorage.setItem('popupaction','update')
    console.log("userid has been set")
    const dialogRef = this.dialog.open(ManagerpopupComponent, {
      width: '500px'
    });
  
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    }
  
  
}
