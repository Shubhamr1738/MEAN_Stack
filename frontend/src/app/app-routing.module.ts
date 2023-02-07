import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllreportsComponent } from './allreports/allreports.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { SignupComponent } from './signup/signup.component';
import { SiteComponent } from './site/site.component';
import { NormalguardGuard } from './services/security/normalguard.guard';
import { AdminGuard } from './services/security/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[NormalguardGuard]
  },
  {
    path:'reports',
    component:ReportsComponent,
    pathMatch:'full',
    canActivate:[NormalguardGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'allreports',
    component:AllreportsComponent,
    pathMatch:'full',
    canActivate:[NormalguardGuard]
  },
  {
    path:'site',
    component:SiteComponent,
    pathMatch:'full',
    canActivate:[NormalguardGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
