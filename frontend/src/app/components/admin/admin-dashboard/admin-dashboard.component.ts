import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import{AdminService} from '../services/admin.service'
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
  adminDatasource:any
  managerDataSource:any
  allUserData:any
  selectedCompanyName:any
  constructor(private dataService: AdminService,public dialog: MatDialog) {}
  displayedColumns: string[] = ['demo-fullname', 'demo-email', 'demo-username','demo-password', 'demo-role',"demo-delete"];

  
  
  ngOnInit() {
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      this.allUserData=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager');
      // this.userdataSource = data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string ,companyName:string      }) => user.role === 'user');
      this.adminDatasource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string }) => user.role === 'admin');
      // this.managerDataSource=data.data.filter((user: { id: number, fullName: string, email: string, username: string, role: string,companyName:string  }) => user.role === 'manager');
    });
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
    }
    
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
  
 