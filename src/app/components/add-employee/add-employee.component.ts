import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Department } from 'src/app/models/department';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/departmentService/department-service.service';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';
import { AppState } from 'src/app/state/app-state/app.state';
import { getDepartmentsAction } from 'src/app/state/department-state/department.action';
import { getDepartments } from 'src/app/state/department-state/department.selector';
import { addEmployee } from 'src/app/state/employee-state/employee.action';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form! : FormGroup

  departments! : Department[]

  employee! : Employee

  orangeTheme! : boolean
  greyTheme! : boolean
  blueTheme! : boolean

  constructor(private dService : DepartmentService,
              private eService: EmployeeService,
              private store : Store< AppState >,
              private router : Router) { }

  ngOnInit(): void {
    this.initializeForm()

    this.store.select(getDepartments).subscribe((data) => {
      this.departments = []
      this.departments.push(...data)
    })

    // this.changeTheme()
  }

  initializeForm() {
    this.form = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z ]+$")]),
      gender : new FormControl("male",[Validators.required]),
      salary : new FormControl(null,[Validators.required,Validators.min(1000),Validators.max(1000000)]),
      departmentId : new FormControl(null,[Validators.required])
    })
  }

  get name(){
    return this.form.controls.name;
  }

  get salary(){
    return this.form.controls.salary;
  }

  get gender(){
    return this.form.controls.gender;
  }

  get departmentId(){
    return this.form.controls.departmentId
  }

  addEmployee(){
    this.employee = new Employee()
    this.employee.name = this.name.value;
    this.employee.salary = this.salary.value;
    this.employee.gender = this.gender.value;
    this.employee.departmentId = Number(this.departmentId.value);
    
    this.store.dispatch(addEmployee( { employee : this.employee }))

    this.form.reset()
    
    this.initializeForm()

    this.router.navigate(['/employee'])
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
