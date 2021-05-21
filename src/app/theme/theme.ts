export interface Theme {
    name : string;
    properties : any;
}

export const orange : Theme = {
    name : "orange",
    properties : {
        "--background-primary": "orange"
    }
}

export const blue : Theme = {
    name : "blue",
    properties : {
        "--background-primary": "rgb(123, 241, 241)"
    }
}
