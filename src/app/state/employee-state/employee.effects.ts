import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "src/app/services/employeeService/employee.service";
import { addEmployee, addEmployeeSuccess, deleteEmployee, deleteEmployeeSuccess, getEmployeesAction, getEmployeesSuccess, updateEmployee, updateEmployeeSuccess } from "./employee.action";
import { map, mergeMap } from "rxjs/operators";


@Injectable()
export class EmployeeEffects{
    constructor(private actions$: Actions, private service: EmployeeService){}

    getEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getEmployeesAction),
            mergeMap((action) => {
                return this.service.getEmployees().pipe(
                    map((data) => {
                        return getEmployeesSuccess({employee: data})
                    })
                )
            })
        )
    })
     
    addEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addEmployee),
            mergeMap((action) => {
                console.log(action.employee)
                return this.service.addEmployee(action.employee).pipe(
                    map((data) => {
                        //console.log(data);
                        //return addEmployeeSuccess({ employee : data})
                        return getEmployeesAction();
                    })
                )
            })
        )
    })
    
    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateEmployee),
            mergeMap((action) => {
                return this.service.updateEmployee(action.employee).pipe(
                    map(() => {
                        return updateEmployeeSuccess({ employee : action.employee })
                    })
                )
            })
        )
    })   
    
    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteEmployee),
            mergeMap((action) => {
                return this.service.deleteEmployee(action.employee).pipe(
                    map(() => {
                        return deleteEmployeeSuccess({ employee : action.employee })
                    })
                )
            })
        )
    })   

}