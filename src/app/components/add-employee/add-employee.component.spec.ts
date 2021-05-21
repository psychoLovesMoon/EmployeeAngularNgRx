import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DepartmentService } from 'src/app/services/departmentService/department-service.service';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';
import { Employee } from 'src/app/models/employee';
import { from } from 'rxjs';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      providers: [
        DepartmentService,
        EmployeeService
      ],
      imports: [ HttpClientModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addEmployee method when form is submitted', () => {
    let method = spyOn(component,'addEmployee');

    let button = fixture.debugElement.query(By.css("form"));
    button.triggerEventHandler('submit',null);
    fixture.detectChanges();

    expect(method).toHaveBeenCalled()
  })

  it('should call addEmployee in employee service class', () => {
    let service = TestBed.inject(EmployeeService);
    let serviceClassMethod = spyOn(service,"addEmployee").withArgs(component.employee).and.returnValue(from([component.employee]));
    component.form.controls.id.setValue(1);
    component.form.controls.name.setValue("bhim");
    component.form.controls.salary.setValue(1111);
    component.form.controls.gender.setValue("male");
    component.form.controls.departmentId.setValue(1);

    component.addEmployee();
    

    expect(serviceClassMethod).toHaveBeenCalledWith(component.employee);
  })

});
