import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employeeService/employee.service';

import { GetEmployeeComponent } from './get-employee.component';

describe('GetEmployeeComponent', () => {
  let component: GetEmployeeComponent;
  let fixture: ComponentFixture<GetEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeComponent ],
      providers: [ EmployeeService],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEmployees method from ngOnInit()', () => {
    let method = spyOn(component,'getEmployees');

    component.ngOnInit();

    expect(method).toHaveBeenCalled();
  })

  it('should call updateEmployee method when update button is pressed', () => {
    let method = spyOn(component,'updateEmployee');
    let button = fixture.debugElement.query(By.css("button"));
    component.employees = [
      { id:1,
        name:'bhim',
        gender:'male',
        salary:1111,
        departmentId:1,
        departmentName:'IT'
      }]
    fixture.detectChanges();
    console.log(component.employees)
    method.withArgs(component.employees[0])

    console.log(fixture.debugElement.query(By.css('tr')));
    console.log(button)
    button.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(method).toHaveBeenCalled()
  })
});
