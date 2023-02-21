import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../reports/site/services/site.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

data:any;
  constructor(private siteservice:SiteService) { }

  displayedColumns: string[] = ['demo-siteName', 'demo-date',"demo-action"];

  ngOnInit(): void {
    this.siteservice.getallSites().subscribe(data => {

      console.log(data);
      this.data=data;
      
    });
    
  }

  deleteSite(id:any){
    this.siteservice.deleteSite(id).subscribe(data=>{
      this.siteservice.getallSites().subscribe(data => {

        console.log(data);
        this.data=data;
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
