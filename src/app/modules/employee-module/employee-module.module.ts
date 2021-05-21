import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from 'src/app/components/add-employee/add-employee.component';
import { GetEmployeeComponent } from 'src/app/components/get-employee/get-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from 'src/app/components/update-employee/update-employee.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from 'src/app/state/employee-state/employee.effects';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    GetEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([EmployeeEffects])
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
