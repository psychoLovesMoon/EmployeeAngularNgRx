import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from '../../components/getDepartments/department.component';
import { DepartmentService } from '../../services/departmentService/department-service.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartmentEffects } from 'src/app/state/department-state/department.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    DepartmentComponent,
    
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EffectsModule.forFeature([DepartmentEffects])
  ],
  providers: [
    DepartmentService
  ]
})
export class DepartmentModule { }
