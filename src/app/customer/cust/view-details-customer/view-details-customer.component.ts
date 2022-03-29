import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-view-details-customer',
  templateUrl: './view-details-customer.component.html',
  styleUrls: ['./view-details-customer.component.scss']
})
export class ViewDetailsCustomerComponent implements OnInit {

  getCustomer: any = []

  title: any = '';
  disableInput: any = true;
  showButton:any=true
  customerForm!:FormGroup

  constructor(public route: Router, public customService: CustomerService, private Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.Activatedroute.snapshot.routeConfig?.path?.includes('view')) {
      this.title = 'DETAILS CUSTOMER',
      this.showButton = false

    } else if (this.Activatedroute.snapshot.routeConfig?.path?.includes('edite')) {
      this.title = 'UPDATE CUSTOMER INFORMATION'
        this.disableInput = false

    }

    var id = this.Activatedroute.snapshot.queryParams['custId']
    if (id)
      this.getCustomerById(id)
      else
      this.bulidUpdateCustomer()
  }

  //method back to table
  backToTable() {
    this.route.navigate(['cust'])
  }



  getCustomerById(id: number) {
    this.customService.getCustomerById(id).subscribe(res => {
      this.getCustomer = res
      this.bulidUpdateCustomer();
    })
  }

  bulidUpdateCustomer(){
    console.log(this.getCustomer)
   this.customerForm = new FormGroup({
     id: new FormControl({ value: this.getCustomer.id, disabled: this.disableInput }, Validators.required) ,
      firstName: new FormControl({ value: this.getCustomer.firstName, disabled: this.disableInput }, Validators.required) ,
      lastName: new FormControl({ value: this.getCustomer.lastName, disabled: this.disableInput }, Validators.required) ,
      phone:new FormControl({ value: this.getCustomer.phone, disabled: this.disableInput }, Validators.required) ,
      addres:new FormControl({ value: this.getCustomer.addres, disabled: this.disableInput }, Validators.required) ,
      email:new FormControl({ value: this.getCustomer.email, disabled: this.disableInput }, Validators.required) ,
      balance:new FormControl({ value: this.getCustomer.balance, disabled: this.disableInput }, Validators.required) ,
      customerImage:new FormControl({ value: this.getCustomer.customerImage, disabled: this.disableInput }, Validators.required) ,
      genderId:new FormControl({ value: this.getCustomer.genderId, disabled: this.disableInput }, Validators.required) ,
    });
  }
  updateCustomer(){
    debugger;
    this.customService.updateCustomer(this.customerForm.value).subscribe(res =>{
      this.route.navigate(['cust']);
      console.log(res)
    }, (error) => { console.error("faild") });
    
  }

 
}