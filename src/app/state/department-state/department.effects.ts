import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { DepartmentService } from "src/app/services/departmentService/department-service.service";
import { getDepartmentsAction, getDepartmentsSuccess } from "./department.action";

@Injectable()
export class DepartmentEffects {
    constructor(private actions$: Actions, private service: DepartmentService) {}

    getDepartments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getDepartmentsAction),
            mergeMap((action) => {
                return this.service.getDepartments().pipe(
                    map((data) => {
                        return getDepartmentsSuccess({department : data})
                    })
                )
            })
        )
    })
}