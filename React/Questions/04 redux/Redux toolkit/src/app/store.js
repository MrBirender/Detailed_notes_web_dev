// step1: get configureStore from redux toolkit
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../feature/todo/todoSlice"
// todoredcucer name is a choice it can be anything


export const store = configureStore({
    reducer: todoReducer
})