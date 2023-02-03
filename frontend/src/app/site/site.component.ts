import { Component, OnInit } from '@angular/core';
import{SiteService} from '../services/site.service'
import { Site } from '../models/site';
import { Router } from '@angular/router';



@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  sites=new Site()
  constructor(private siteservice:SiteService,private router:Router) { }

  ngOnInit(): void {
    
  }
  saveSite(){
   
    console.log(this.sites)
    this.siteservice.AddItems(this.sites).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        this.router.navigate(['/home']);

    },
    error=>console.log(error));
}

}
