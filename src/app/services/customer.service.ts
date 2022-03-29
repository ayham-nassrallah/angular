import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  //this method to get All customer inside the table
  getCustomer(){
   return this.http.get('https://localhost:44316/api/Customer')
  }

//this method to get details customer using id customer
getCustomerById(id :number){
  return this.http.get('https://localhost:44316/api/Customer/GetCustomerById?Id='+id)
}
updateCustomer(customer:any){
  return this.http.put('https://localhost:44316/api/Customer',customer)
}
}
