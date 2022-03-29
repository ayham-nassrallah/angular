import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeBaseComponent } from './home/home-base/home-base.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StyleDirective } from './style.directive';
import {NgbAlertModule, NgbModalModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { GetEmployeeComponent } from './home/emp/get-employee/get-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailsEmployeeComponent } from './home/emp/view-details-employee/view-details-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBaseComponent,
    StyleDirective,
    GetEmployeeComponent,
    ViewDetailsEmployeeComponent,
    
   


 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,   
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule ,
       
    
  ],
  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
