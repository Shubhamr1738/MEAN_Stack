import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{Site} from '../models/Site'
import { SiteService } from './services/site.service';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  sites:any
  constructor(private siteservice:SiteService,private router:Router,private fb:FormBuilder) { }
  currentDate: Date = new Date();
  ngOnInit(): void {
    this.sites = this.fb.group({
      site: [''],
      date: ['']
  
    });
  }
  saveSite(){
   
    console.log(this.sites.value)
    this.siteservice.AddItems(this.sites.value).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        this.router.navigate(['/home']);

    },
    error=>console.log(error));
}

}
