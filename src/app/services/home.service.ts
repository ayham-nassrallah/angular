import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


     //get All Employee
  getAllEmployee() {  
    return this.http.get('https://localhost:44316/api/Employee');
  }

  //ViewDetailsEmployee
  ViewDetailsEmployee(id:number) {  

    return this.http.get('https://localhost:44316/api/Employee/GetEmployeeById?id='+id);
  }

  //update Employee information
  updateEmp(employee: any){
    return this.http.put('https://localhost:44316/api/Employee', employee)
    
  }

  newEmployee(emp:any){
    return this.http.post('https://localhost:44316/api/Employee/RegisterEmployee',emp)
  }

  deleteEmployeeById(id :number){
   return this.http.delete('https://localhost:44316/api/Employee/DeleteFromEmployee?Id='+id)
  }
}
