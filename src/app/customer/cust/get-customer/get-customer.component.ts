import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {

getCustomer : any = [];

  constructor(public route:Router, public custService:CustomerService) { }

  ngOnInit(): void {

    this.getAllCustomer();
  }

  //this method have all customer in table
  getAllCustomer() {
    this.custService.getCustomer().subscribe(res => {
      this.getCustomer = res
    })
  }
  //this method to go view component 
  goToView(id:number){
    this.route.navigate(['cust/view']  ,{queryParams: { custId: id } })
  }

  editeCustomer(id:number){
this.route.navigate(['cust/edite'] ,{queryParams: {custId:id}})
  }

}
