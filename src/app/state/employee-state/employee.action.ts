import { createAction, props } from "@ngrx/store"
import { Employee } from "src/app/models/employee";


export const GET_EMPLOYEES = "[employee page] get employees";
export const GET_EMPLOYEES_SUCCESS = "[employee page] get employees success"
export const ADD_EMPLOYEE = "[employee page] add employee";
export const ADD_EMPLOYEE_SUCCESS = "[employee page] add employee success"
export const UPDATE_EMPLOYEE_SUCCESS = "[employee page] update employee success"
export const UPDATE_EMPLOYEE = "[employee page] update employee"
export const DELETE_EMPLOYEE = "[employee page] delete employee"
export const DELETE_EMPLOYEE_SUCCESS = "[employee page] delete employee success"


export const getEmployeesAction = createAction(GET_EMPLOYEES);
export const getEmployeesSuccess = createAction(GET_EMPLOYEES_SUCCESS,
                                                props<{ employee: Employee[] }>());
export const addEmployee = createAction(ADD_EMPLOYEE, 
                                        props<{ employee: Employee }>());

export const addEmployeeSuccess = createAction(ADD_EMPLOYEE_SUCCESS, 
                                        props<{ employee: Employee }>());
    
export const updateEmployee = createAction(UPDATE_EMPLOYEE, 
                                        props<{ employee: Employee }>());
    
export const updateEmployeeSuccess = createAction(UPDATE_EMPLOYEE_SUCCESS, 
                                        props<{ employee: Employee }>());

export const deleteEmployee = createAction(DELETE_EMPLOYEE, 
                                        props<{ employee: Employee }>());
        
export const deleteEmployeeSuccess = createAction(DELETE_EMPLOYEE_SUCCESS, 
                                        props<{ employee: Employee }>());