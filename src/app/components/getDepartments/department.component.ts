import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';
import { AppState } from 'src/app/state/app-state/app.state';
import { getDepartmentsAction } from 'src/app/state/department-state/department.action';
import { getDepartments } from 'src/app/state/department-state/department.selector';
import { DepartmentState } from 'src/app/state/department-state/department.state';
import { getEmployeesAction } from 'src/app/state/employee-state/employee.action';
import { DepartmentService } from '../../services/departmentService/department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments$! : Observable< Department[] >;

  constructor(private service : DepartmentService,
              private store : Store< AppState >
              ) { }

  departments : Department[] = []

  p : number = 1;

  orangeTheme! : boolean
  greyTheme! : boolean
  blueTheme! : boolean

  ngOnInit(): void {
    // this.getDepartments()
    //this.departments$ = this.store.select(getDepartments);
    //this.departments$.subscribe(data => console.log(data))

    this.store.dispatch(getDepartmentsAction())

    this.store.select(getDepartments).subscribe( data => {
      this.departments = []
      this.departments.push(...data)
    });

    // this.changeTheme()
  }
  
  getDepartments(){
    this.service.getDepartments().subscribe(response => 
      this.departments = response
    )
    console.log(this.service.getDepartments())
  }

  changeTheme(){
    this.greyTheme = false;
    this.orangeTheme = false;
    this.blueTheme = false;
    console.log(localStorage.getItem('theme'))
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
