import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, name:'Birender'},
    {id:2, name:'Maya'},
    {id:3, name:'sonia'}
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer