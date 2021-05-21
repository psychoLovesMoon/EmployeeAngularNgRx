import { departmentReducer } from "../department-state/department.reducer";
import { DepartmentState } from "../department-state/department.state";
import { employeeReducer } from "../employee-state/employee.reducer";
import { EmployeeState } from "../employee-state/employee.state";

export interface AppState {
    department : DepartmentState,
    employee : EmployeeState
}

export const appReducer = {
    department : departmentReducer,
    employee : employeeReducer
}