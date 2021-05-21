import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  employee! : Employee

  baseUrl = 'https://localhost:44320/api/employee'

  getEmployees(){
    return this.http.get<Employee[]>(this.baseUrl + '/getemployee')
  }

  addEmployee(employee : Employee){
    return this.http.post<Employee>(this.baseUrl + '/postemployee',employee)
  }

  deleteEmployee(employee : Employee){
    return this.http.delete(this.baseUrl + "/DeleteEmployee/"+employee.id)
  }

  updateEmployee(employee : Employee){
    console.log(employee)
    return this.http.put(this.baseUrl + "/",employee)
  }
}
