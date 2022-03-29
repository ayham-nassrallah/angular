import { invalid } from '@angular/compiler/src/render3/view/util';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-view-details-employee',
  templateUrl: './view-details-employee.component.html',
  styleUrls: ['./view-details-employee.component.scss']
})
export class ViewDetailsEmployeeComponent implements OnInit {
  title = "";
  showButton = false;
  disableInput = false;
  showButtonSave = false;
  create = true;
  createEmpl = true
  employeeForm!: FormGroup;

  constructor(private activatedToute: ActivatedRoute, public homeserv: HomeService, public rout: Router) { }
  ngOnInit(): void {
    if (!this.activatedToute.snapshot.routeConfig?.path?.includes("edite")) {
      this.title = "View Details Employee"
      this.showButton = true
      this.showButtonSave = false
      this.disableInput = true
      this.createEmpl = false

    } else if (!this.activatedToute.snapshot.routeConfig?.path.includes("new")) {
      this.title = "Edite Details Employee"
      this.showButton = true
      this.disableInput = false
      this.showButtonSave = true
      this.createEmpl = false


    } else if (this.activatedToute.snapshot.routeConfig?.path.includes("new")) {
      this.title = "CREATE NEW EMPLOYEE"
      this.showButton = true
      this.disableInput = false
      this.showButtonSave = false
      this.create = false
      this.createEmpl = true

    }


    //load information by employee  
    var id = this.activatedToute.snapshot.queryParams['empId'];
    if (id)
      this.viewDetailsEmployee(id);

    else
      this.buildEmployeeForm();
  }

  buildEmployeeForm() { 
    this.employeeForm = new FormGroup({
      id: new FormControl({ value: this.detailsEmployee.id, disabled: this.disableInput }, !this.create? null: Validators.required),
      genderId: new FormControl({ value: this.detailsEmployee.genderId, disabled: this.disableInput }),
      // gender: new FormControl({ value: this.detailsEmployee.gender, disabled: this.disableInput }, Validators.required),
      attendances: new FormControl({ value: this.detailsEmployee.attendances, disabled: this.disableInput }),
      logins: new FormControl({ value: this.detailsEmployee.logins, disabled: this.disableInput }),
      taskEmployees: new FormControl({ value: this.detailsEmployee.taskEmployees, disabled: this.disableInput }),
      firstName: new FormControl({ value: this.detailsEmployee.firstName, disabled: this.disableInput }, Validators.required),
      lastName: new FormControl({ value: this.detailsEmployee.lastName, disabled: this.disableInput }, Validators.required),
      phone: new FormControl({ value: this.detailsEmployee.phone, disabled: this.disableInput }, Validators.required),
      addres: new FormControl({ value: this.detailsEmployee.addres, disabled: this.disableInput }, Validators.required),
      email: new FormControl({ value: this.detailsEmployee.email, disabled: this.disableInput }, Validators.required),
      salary: new FormControl({ value: this.detailsEmployee.salary, disabled: this.disableInput }, !this.create? null: Validators.required),
      bounas: new FormControl({ value: this.detailsEmployee.bounas, disabled: this.disableInput }, !this.create? null: Validators.required),
      UserName: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
      Password: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
      Gender: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
      Role: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
      EmployeeSalary: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
      EmployeeBounes: new FormControl({ value: '', disabled: this.disableInput || this.create }, Validators.required),
    });


  }

  //array of Employee Informatin
  detailsEmployee: any = []
  //method view click to get information employee
  viewDetailsEmployee(id: number) {

    this.homeserv.ViewDetailsEmployee(id).subscribe(res => {
      this.detailsEmployee = res
      console.log(this.detailsEmployee)
      this.buildEmployeeForm();
    })
  }
  //method back to table information Employee
  backToTable() {
    this.rout.navigate(['emp'])
  }

  // updateEmployee:any=[]
  updateEmp() {
    if (this.employeeForm.valid) {
      this.homeserv.updateEmp(this.employeeForm.value).subscribe((res) => {
        this.rout.navigate(['emp']);
        console.log(res)
      }, (error) => { console.error("faild") });
    }else
    {
      alert("somthing woring")
    }
  }

  createEmp() {
    if(this.employeeForm.valid){
    this.homeserv.newEmployee(this.employeeForm.value).subscribe((res) => {
      this.rout.navigate(['emp']);
    }, (error) => { alert(error) });
  }else
  {
    alert("somthing woring")
  }
  }


}