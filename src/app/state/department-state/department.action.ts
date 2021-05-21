import { createAction, props } from "@ngrx/store";
import { Department } from "src/app/models/department";

export const GET_DEPARTMENTS = "[department page] get departments"
export const GET_DEPARTMENTS_SUCCESS = "[department page] get departments success"

export const getDepartmentsAction = createAction(GET_DEPARTMENTS)
export const getDepartmentsSuccess = createAction(GET_DEPARTMENTS_SUCCESS,
                                            props<{department : Department[]}>())