import { Component, OnInit } from '@angular/core';
import{AdminService} from '../services/admin.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  table:any
  // @ViewChild(MatTable, {static:false}) table: MatTable<any>;
  // displayedColumns: string[] = ['demo-firstName', 'demo-lastName', 'demo-email', 'demo-username','demo-password', 'demo-sites'];
  dataSource:any
  constructor(private dataService: AdminService) {}
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-password', 'demo-site','demo-delete'];

  
  
  ngOnInit() {
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      this.dataSource=data.data;
    });
  }

  deleteUser(){
    
  }
  
 

}
