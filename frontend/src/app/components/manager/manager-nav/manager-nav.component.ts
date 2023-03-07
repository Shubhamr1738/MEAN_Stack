import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login/services/login.service';

@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.css']
})
export class ManagerNavComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
