import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageComponent } from './percentage/percentage.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservComponent } from './observ/observ.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'obse',
    component: ObservComponent
  }
]


@NgModule({
  declarations: [
    PercentageComponent,
    FormComponent,
    DialogComponent,
    ObservComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule ,
 
    
  ]
})
export class TaskModule { }
