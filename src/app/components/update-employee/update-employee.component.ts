import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { props, Store } from '@ngrx/store';
import { Department } from 'src/app/models/department';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/departmentService/department-service.service';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';
import { AppState } from 'src/app/state/app-state/app.state';
import { getDepartments } from 'src/app/state/department-state/department.selector';
import { updateEmployee } from 'src/app/state/employee-state/employee.action';
import { getEmployeeById } from 'src/app/state/employee-state/employee.selector';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private eservice : EmployeeService,
              private dservice : DepartmentService,
              private router : Router,
              private route : ActivatedRoute,
              private store : Store<AppState> ) { }

  employee! : Employee
  departments! : Department[]


  orangeTheme! : boolean
  greyTheme! : boolean
  blueTheme! : boolean

  form! : FormGroup

  ngOnInit(): void {

    this.initializeForm()

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getEmployeeById, { id },).subscribe((data) => {
        this.employee = data;
        this.departmentId.setValue(this.employee?.departmentId)
        this.name.setValue(this.employee?.name)
        this.salary.setValue(this.employee?.salary)
        this.gender.setValue(this.employee?.gender)
      })
    })

    this.store.select(getDepartments).subscribe((data) => {
      this.departments = []
      this.departments.push(...data)
    })

    // this.changeTheme()
  }

  initializeForm() {
    this.form = new FormGroup({
      name : new FormControl("",Validators.pattern("^[A-Za-z ]+$")),
      gender : new FormControl(""),
      salary : new FormControl("",[Validators.min(1000),Validators.max(1000000)]),
      departmentId : new FormControl("")
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

  updateEmployee(){
    let updatedEmployee : Employee = new Employee()
    updatedEmployee.id = this.employee.id
    updatedEmployee.name = this.name.value;
    updatedEmployee.salary = this.salary.value;
    updatedEmployee.gender = this.gender.value;
    updatedEmployee.departmentId = Number(this.departmentId.value);

    const department = this.departments.filter((dep) => {
      return dep.id === updatedEmployee.departmentId
    })
    
    updatedEmployee.departmentName = department[0].departmentName;
    
    this.store.dispatch(updateEmployee({ employee : updatedEmployee }))

    this.form.reset()

    this.initializeForm()

    this.router.navigate(['/employee'])
    //this.eservice.updateEmployee(updatedEmployee).subscribe(() => this.router.navigate(['/employee']))
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
