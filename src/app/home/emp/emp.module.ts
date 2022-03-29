import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetEmployeeComponent } from './get-employee/get-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsEmployeeComponent } from './view-details-employee/view-details-employee.component';


const routes: Routes = [
  
  {
    path: '',
    component:GetEmployeeComponent ,

  },
  
  {
    path: 'detailsEmployee',
    component: ViewDetailsEmployeeComponent,

  },
  {
    path: 'detailsEmployee/edite/new',
    component: ViewDetailsEmployeeComponent,

  },
  
  {
    path: 'detailsEmployee/edite',
    component: ViewDetailsEmployeeComponent,

  }
]


@NgModule({
  declarations: [],
  imports: [
    
    CommonModule,
    RouterModule.forChild(routes)   
    
  ]
})
export class EmpModule { }
