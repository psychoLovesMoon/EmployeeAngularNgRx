import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';
import { AppState } from 'src/app/state/app-state/app.state';
import { getEmployee } from 'src/app/state/employee-state/employee.selector';
import { EmployeeState } from 'src/app/state/employee-state/employee.state';
import { deleteEmployee, getEmployeesAction } from '../../state/employee-state/employee.action';


@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  employees : Employee[] = []

  orangeTheme! : boolean
  greyTheme! : boolean
  blueTheme! : boolean

  employeeSubscription! : Subscription

  constructor(private service: EmployeeService, private router: Router, 
              private store : Store< AppState >     
      ) { 
        // this.employeeSubscription = this.store.select(getEmployee).subscribe( data => {
        //   this.employees = []
        //   this.employees.push(...data)
        // });
      }

  ngOnInit(): void {
    //this.getEmployees()
    
    this.store.dispatch(getEmployeesAction())

    this.employeeSubscription = this.store.select(getEmployee).subscribe( data => {
      this.employees = [...data]
    });

    // this.changeTheme()
  }

  ngOnDestroy(): void {
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
  }

  getEmployees(){
    this.service.getEmployees().subscribe(response => {this.employees = response
    console.log(this.employees)
    })
  }

  updateEmployee(employee: Employee){
    this.service.employee = employee;
    this.router.navigate(['/employee/update',employee.id])
  }

  deleteEmployee(employee: Employee){
    // this.service.deleteEmployee(employee).subscribe(() => {
    //   //this.router.navigate(['/employee']);
    //   window.location.reload()
    // },
    // err => {
    //   if(err)
    //     console.log(err)
    //   else
    //     window.location.reload()
    // })
    this.store.dispatch(deleteEmployee({ employee : employee }));
  }

  changeTheme(){
    this.greyTheme = false;
    this.orangeTheme = false;
    this.blueTheme = false;
    switch(localStorage.getItem('theme')){
      case 'orange': this.orangeTheme = true;
                      break;
      case 'grey': this.greyTheme = true;
                      break;       
      case 'blue': this.blueTheme = true;
                      break;        
    }
  }
}
