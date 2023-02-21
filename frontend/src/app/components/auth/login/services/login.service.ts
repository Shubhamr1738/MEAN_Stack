import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { AuthData } from '../models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token:any;
  private user_id:any;
  constructor(private http: HttpClient,private router:Router) { }
  

  ifloggedin(){
    const tokn=localStorage.getItem('token')
    if(tokn==undefined || tokn==""||tokn==null){
      return false;
    }
    else{
      return true;
    }
  }

  public ifadmin(){
    const userId=localStorage.getItem('userId')
    if(userId=="63e0b9beb249d278853df423"){
      return true;
    }
    else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return true;


  }
  loginUserData(authData: any) {
    this.http.post<{token:string,expiresIn:string,id:string}>('http://localhost:3000/user/login', authData)
    .subscribe({
      next:(response)=>{
        console.log(response)
        this.token=response.token;
        this.user_id=response.id;
        console.log(this.token)
        localStorage.setItem('userId',this.user_id);
        localStorage.setItem('token',this.token);
        this.router.navigate(['/home']);
      }
  })
  }
}
