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
  dataSource:any
  constructor(private dataService: AdminService,public dialog: MatDialog) {}
  displayedColumns: string[] = ['demo-fullname', 'demo-email', 'demo-username','demo-password', 'demo-role',"demo-delete"];

  
  
  ngOnInit() {
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      this.dataSource=data.data;
    });
  }

  deleteUser(id:any){
    console.log(id)
    this.dataService.deleteUser(id).subscribe(data=>{
      this.dataService.getusers().subscribe(data => {

        console.log(data.data);
        this.dataSource=data.data;
      });
    }
    
    )
    
    
  }
  
}
  
 