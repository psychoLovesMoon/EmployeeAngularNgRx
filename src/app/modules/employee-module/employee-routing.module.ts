import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetEmployeeComponent } from 'src/app/components/get-employee/get-employee.component';
import { AddEmployeeComponent } from 'src/app/components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from 'src/app/components/update-employee/update-employee.component';

const routes : Routes = [
  {
    path : '' , component : GetEmployeeComponent ,
    children: [
      {
        path : 'add' , component : AddEmployeeComponent
      },
      {
        path : 'update/:id' , component : UpdateEmployeeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }
