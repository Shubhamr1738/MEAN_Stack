import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagerHomeComponent } from '../manager-home/manager-home.component';
import { ManagerNavComponent } from '../manager-nav/manager-nav.component';

const routes: Routes = [
  {path:'managerHome',
  component:ManagerHomeComponent,
  }

]


 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ManagerRoutingModule { }
