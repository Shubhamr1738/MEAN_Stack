import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ReportComponent } from './components/reports/report/report.component';
import { HomeComponent } from './components/home/home/home.component';
import { SiteComponent } from './components/reports/site/site.component';
import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';
import { LabourReport } from './components/reports/models/labour';
import { CementReportsComponent } from './components/reports/cement-reports/cement-reports.component';
import { ReportsHomeComponent } from './components/reports/reports-home/reports-home.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'allreports',
    component:AllReportsComponent,
    pathMatch:'full'
  },
  {
    path:'reports/:siteId',
    component:ReportComponent,
  },
    // {
    //   path:'labourReport',
    // component:LabourReport,
    // },
    // {
    //   path:'cementReport',
    // component:CementReportsComponent,
    // },
    {
      path:'reports',
      component:ReportComponent,
    },
    {
      path:'reportshome',
      component:ReportsHomeComponent,
    },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'site',
    component:SiteComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    pathMatch:'full'
  },
  {
    path:'reports',
    component:ReportComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
