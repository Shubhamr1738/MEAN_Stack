import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/auth/login/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router,private snackBar: MatSnackBar) { }
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
  this.snackBar.open('Logged out Succesfully', 'Action text', {
    duration: 3000, 
    horizontalPosition: 'right', // Values can be 'start', 'center', 'end', or 'left', 'right'
  verticalPosition: 'top' // Values can be 'top', 'bottom'
  });
}

}
