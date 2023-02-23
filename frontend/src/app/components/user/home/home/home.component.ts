import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SiteService } from 'src/app/components/reports/site/services/site.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource:any;
  constructor(private siteservice:SiteService) { }

  displayedColumns: string[] = ['demo-siteName', 'demo-date',"demo-action"];

  ngOnInit(): void {
    this.siteservice.getallSites().subscribe(data => {

      console.log(data);
      this.dataSource=data.data;
      
    });
    
  }

  deleteSite(id:any){
    this.siteservice.deleteSite(id).subscribe(data=>{
      this.siteservice.getallSites().subscribe(data => {

        console.log(data);
        this.dataSource=data.data;
      });
    }
      
    )
  }
  addsite(id:any){
    // localStorage.removeItem('siteId');
    // localStorage.setItem('siteId',id);
    // console.log("in home component",localStorage.getItem('siteId'));
    this.siteservice.setSiteId(id)
  }

  
}
