import { createSlice, nanoid } from "@reduxjs/toolkit";

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
       postAdded: {
         reducer(state, action){
           state.push(action.payload)
         }, 
         prepare(title, content, userId){
          return {
            payload:{
              id:nanoid(),
              title,
              content,
              userId
            }
          }
         }
       }
    }
})

export const selectAllPosts = (state)=> state.posts;
export const {postAdded} = postsSlice.actions

export default postsSlice.reducer