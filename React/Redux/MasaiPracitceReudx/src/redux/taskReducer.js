import { produce } from "immer";

const initialState = {
    tasks: [], 
    loading: false,
    error: null

}

export const taskReducer = produce((draft, action)=> {}, initialState);

