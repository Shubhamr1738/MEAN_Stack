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
  private user_name:any;
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
    localStorage.removeItem('userName');
    localStorage.removeItem('companyName');
    localStorage.removeItem('role');

    return true;


  }
  loginUserData(authData: any) {
    this.http.post<{token:string,expiresIn:string,data:any}>('http://localhost:3000/user/login', authData)
    .subscribe({
      next:(response)=>{
        console.log("response from backend:::::::",response.data)
        this.token=response.token;
        this.user_id=response.data._id;
        this.user_name=response.data.username;
        const companyName=response.data.companyName;
        const role=response.data.role;
// console.log(this.user_id)

        console.log(this.token)
        localStorage.setItem('userId',this.user_id);
        localStorage.setItem('token',this.token);
        localStorage.setItem('userName',this.user_name);
        localStorage.setItem('companyName',companyName);
        localStorage.setItem('role',role);

        this.router.navigate(['/home']);
      }
  })
  }
}
