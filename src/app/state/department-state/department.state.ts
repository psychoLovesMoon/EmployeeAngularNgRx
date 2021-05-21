import { Department } from "src/app/models/department";

export interface DepartmentState {
    departments : Department[]
}


export const initialState : DepartmentState = {
    departments : []
}