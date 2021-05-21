import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './components/getDepartments/department.component';

const routes: Routes = [
  {
    path : 'department' , loadChildren : () => 
                import('./modules/departmentModule/department.module').then(module => module.DepartmentModule)
  },
  {
    path : 'employee' , loadChildren : () =>
                import('./modules/employee-module/employee-module.module').then(module => module.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
