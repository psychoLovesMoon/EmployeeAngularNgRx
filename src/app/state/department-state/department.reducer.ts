import { createReducer, on } from "@ngrx/store";
import { getDepartmentsAction, getDepartmentsSuccess } from "./department.action";
import { initialState } from "./department.state";


const _departmentReducer = createReducer(
    initialState,
    on(getDepartmentsAction, (state) => {
        return {
            ...state
        }
    }),
    on(getDepartmentsSuccess, (state,action) => {
        return {
            ...state,
            departments : action.department
        }
    }) 
)

export function departmentReducer(state,action) {
    return _departmentReducer(state,action);
}