import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalguardGuard implements CanActivate {
  constructor(private loginservice:LoginService,private route :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.ifloggedin() && !this.loginservice.ifadmin()){
        return true;
      }
      else{
        this.route.navigate(['login']);
    return false;
      }
  }
  
}
