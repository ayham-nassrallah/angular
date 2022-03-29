import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit {

  allEmployee: any = [];

  constructor(public homeserv: HomeService,public rout:Router) { }

  ngOnInit(): void {

    this.getAllEmployee();
    
  }
  


  getAllEmployee() {
    this.homeserv.getAllEmployee().subscribe(res => {
      this.allEmployee = res
    })
 
  }
  goToView(id:number){
   
      this.rout.navigate(['emp/detailsEmployee'], {queryParams: {empId: id}})
     
  }
  goToEdite(id:number){
    this.rout.navigate(['emp/detailsEmployee/edite'] ,{queryParams : {empId: id}})
  }

  goToNew(){
    this.rout.navigate(['emp/detailsEmployee/edite/new'])
    }

    goToDelete(id:number){
      this.homeserv.deleteEmployeeById(id).subscribe(res => {
        this.getAllEmployee();
      })
    }


}
