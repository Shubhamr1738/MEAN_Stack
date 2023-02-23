import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerSitesComponent } from '../manager-sites/manager-sites.component';
import { ManagerHomeComponent } from '../manager-home/manager-home.component';
import { ManagerNavComponent } from '../manager-nav/manager-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ManagerRoutingModule } from './manager-routing.module';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    // ManagerNavComponent,
    // ManagerHomeComponent,
    // ManagerSitesComponent


  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ManagerHomeComponent]
})
export class ManagerModule { }
