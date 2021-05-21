import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from '../../components/getDepartments/department.component';

const routes: Routes = [
  {
    path : '' , component : DepartmentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentRoutingModule { }
