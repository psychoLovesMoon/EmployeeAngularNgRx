import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { departmentReducer } from './state/department-state/department.reducer';
import { employeeReducer } from './state/employee-state/employee.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './state/app-state/app.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducer ),
    StoreDevtoolsModule.instrument({

      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
