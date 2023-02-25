import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/auth/login/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  
userRole:any
  ngOnInit(): void {
   this.userRole=localStorage.getItem('role')
    console.log("User Role Assigned: ",this.userRole)
    
  }
logout(){
  this.loginService.logout()
  this.router.navigate(['/login']);
}

}
