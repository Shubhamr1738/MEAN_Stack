import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminpopupComponent } from '../adminpopup/adminpopup.component';
import{AdminService} from '../services/admin.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  table:any
  // @ViewChild(MatTable, {static:false}) table: MatTable<any>;
  // displayedColumns: string[] = ['demo-firstName', 'demo-lastName', 'demo-email', 'demo-username','demo-password', 'demo-sites'];
  userdataSource:any
  // adminDatasource:MatTableDataSource<any>
  managerDataSource:any
  allUserData:any
  selectedCompanyName:any
  adminDatasource = new MatTableDataSource<any>([]);

  constructor(private dataService: AdminService,public dialog: MatDialog) {}
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['demo-fullname', 'demo-email', 'demo-username','demo-password', 'demo-role',"demo-delete"];

 
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminpopupComponent, {
      width: '500px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  updateUser(userId:any){
  localStorage.setItem('selectedUserId',userId)
  console.log("userid has been set")
  const dialogRef = this.dialog.open(AdminpopupComponent, {
    width: '500px'
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
  }


  ngOnInit() {
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      this.allUserData=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager');
      // this.userdataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string ,companyName:string      }) => user.role === 'user');
      this.adminDatasource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'admin');
      // this.managerDataSource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager');
    
    });

    // this.adminDatasource = new MatTableDataSource<any>(/* your data */);
    this.adminDatasource.paginator = this.paginator;
  }




  deleteUser(id:any){
    console.log(id)
    this.dataService.deleteUser(id).subscribe(data=>{
      this.dataService.getusers().subscribe(data => {

        console.log(data.data);
        // this.userdataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'user');
        this.adminDatasource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'admin');
        // this.managerDataSource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'manager');
     
      });
      Swal.fire({
        icon: 'success',
        title: 'Deleted Succesfully',
        text: 'Data has been Deleted Succesfully',
        
      })
    },error =>{console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'please try again',
        
      })} 
    
    )
    
    
  }
  getCompanyName(selectedCompanyName:any){
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      // this.allUserData=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager');
      this.userdataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string ,companyName:string      }) => user.role === 'user'&& user.companyName === selectedCompanyName);
      this.managerDataSource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager'&& user.companyName === selectedCompanyName);
    });
  }
  
}
  
 