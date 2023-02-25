import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NavBarComponent } from './components/user/home/nav-bar/nav-bar.component'; 
import { HomeComponent } from './components/user/home/home/home.component';
import { MaterialReportsComponent } from './components/reports/material-reports/material-reports.component';
import { CementReportsComponent } from './components/reports/cement-reports/cement-reports.component';
import { LabourReportsComponent} from './components/reports/labour-reports/labour-reports.component';
import { RemarksReportsComponent } from './components/reports/remarks-reports/remarks-reports.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './components/reports/report/report.component';
import { SiteComponent } from './components/reports/site/site.component';
import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MaterialConsumptionComponent } from './components/reports/material-consumption/material-consumption.component';
import { AdminNavBarComponent } from './components/admin/admin-nav-bar/admin-nav-bar.component';
import { ReportsHomeComponent } from './components/reports/reports-home/reports-home.component';
import { ManagerRoutingModule } from './components/manager/Modules/manager-routing.module';
import { ManagerNavComponent } from './components/manager/manager-nav/manager-nav.component';
import { ManagerHomeComponent } from './components/manager/manager-home/manager-home.component';
import { ManagerSitesComponent } from './components/manager/manager-sites/manager-sites.component';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    MaterialReportsComponent,
    CementReportsComponent,
    LabourReportsComponent,
    RemarksReportsComponent,
    ReportComponent,
    SiteComponent,
    AllReportsComponent,
    MaterialConsumptionComponent,
    AdminNavBarComponent,
    ReportsHomeComponent,
    ManagerNavComponent,
    ManagerHomeComponent,
    ManagerSitesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    ManagerRoutingModule,
    RouterModule,
    MatListModule,
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
