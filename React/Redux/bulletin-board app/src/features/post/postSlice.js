import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learn React",
    content: "Go to the website and learn react.",
  },
  {
    id: "2",
    title: "Learn Node",
    content: "Go to the dev classes and learn node.",
  },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       postAdded: (state, action) => {
           state.push(action.payload)
       }
    }
})

export const selectAllPosts = (state)=> state.posts;
export const {postAdded} = postsSlice.actions

export default postsSlice.reducer