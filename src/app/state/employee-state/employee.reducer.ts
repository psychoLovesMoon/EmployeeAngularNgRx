import { createReducer, on } from "@ngrx/store"

import { addEmployeeSuccess, deleteEmployeeSuccess, getEmployeesAction, getEmployeesSuccess, updateEmployeeSuccess } from "./employee.action"
import { initialState } from "./employee.state"


const _employeeReducer = createReducer(initialState, 
    on(getEmployeesAction, (state) => {
        return {
            ...state
        }
    }),
    on(addEmployeeSuccess, (state, action) => {
        //action.employee.id = state.employees.length + 1;
        return {
            ...state,
            employees : [...state.employees, action.employee]
        }
    }),
    on(getEmployeesSuccess, (state, action) => {
        return {
            ...state,
            employees : action.employee
        }
    }),
    on(updateEmployeeSuccess, (state , action) => {
        console.log(action.employee)
        const updatedEmployees = state.employees.map( post => {
            return action.employee.id === post.id ? action.employee : post
        })
        return {
            ...state,
            employees : updatedEmployees
        }
    }),  
    on(deleteEmployeeSuccess, (state , action) => {
        const updatedEmployees = state.employees.filter( post => {
            return action.employee.id !== post.id;
        })
        return {
            ...state,
            employees : updatedEmployees
        }
    })      
)

export function employeeReducer(state, action) {
    return _employeeReducer(state, action)
}