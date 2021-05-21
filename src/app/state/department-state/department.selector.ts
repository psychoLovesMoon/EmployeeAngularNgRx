import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState } from "./department.state";

const getDepartmentState = createFeatureSelector<DepartmentState>('department');

export const getDepartments = createSelector(getDepartmentState, state => {
    return state.departments;
    //console.log(state.departments);
    })