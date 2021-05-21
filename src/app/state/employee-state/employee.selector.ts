import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "src/app/models/employee";
import { EmployeeState } from "./employee.state";


const employeeState = createFeatureSelector<EmployeeState>('employee');

export const getEmployee = createSelector(employeeState,(state) => {
    return state.employees;
})

export const getEmployeeById = createSelector(employeeState, (state, props) => {
    
    const employees = state.employees;
    let employee;
    for (let emp of employees){
        if(emp.id == props.id)
            employee = emp
    }
    
    return employee ? employee : new Employee
})