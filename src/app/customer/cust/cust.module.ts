import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsCustomerComponent } from './view-details-customer/view-details-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
 { 
  path:'',
component:GetCustomerComponent
 },
 { 
  path:'view',
component:ViewDetailsCustomerComponent
 }
 ,
 { 
  path:'edite',
component:ViewDetailsCustomerComponent
 }
]


@NgModule({
  declarations: [
    GetCustomerComponent,
    ViewDetailsCustomerComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)   
 
  ]
})
export class CustModule { }
