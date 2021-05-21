import { Employee } from "src/app/models/employee";

export interface EmployeeState {
    employees : Employee[]
}

export const initialState : EmployeeState = {
    employees : []
}