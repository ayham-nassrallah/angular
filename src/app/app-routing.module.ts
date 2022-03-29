import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBaseComponent } from './home/home-base/home-base.component';

const routes: Routes = [
  

  {
    path: '',
    component: HomeBaseComponent,

  },
  {
    path: 'emp',
    loadChildren: () => import('./home/emp/emp.module').then(m => m.EmpModule)

  },
  {
    path: 'cust',
    loadChildren: () => import('./customer/cust/cust.module').then(m => m.CustModule)

  }
  ,
  {
    path: 'task',
    loadChildren: () => import('./task/task/task.module').then(m => m.TaskModule)

  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
     

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
