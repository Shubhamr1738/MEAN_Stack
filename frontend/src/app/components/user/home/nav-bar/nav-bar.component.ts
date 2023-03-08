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
  logoutCheckUp:any
userRole=localStorage.getItem('role')
  ngOnInit(): void {
    this.userRole=localStorage.getItem('role')
    console.log("User Role Assigned: ",this.userRole)
    
  }
logout(){
  this.logoutCheckUp=this.loginService.logout()
  console.log(this.logoutCheckUp)
  this.router.navigate(['/login']);
}

}
