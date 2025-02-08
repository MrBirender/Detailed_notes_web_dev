import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import {sub} from "date-fns";
import axios from "axios";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=> {
   const response = await axios.get(POST_URL);

   return [...response.data]
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       postAdded: {
         reducer(state, action){
           state.posts.push(action.payload)
         }, 
         prepare(title, content, userId){
          return {
            payload:{
              id:nanoid(),
              title,
              content,
              date: new Date().toISOString(),
              userId,
              reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
              }
            }
          }
         }
         

       },
       reactionAdded(state, action){
        const {postId, reaction} = action.payload
        const existingPost = state.posts.find(post => post.id === postId);
        if(existingPost){
          existingPost.reactions[reaction]++
        }
       }
    },
    extraReducers(builder){
      builder
         .addCase(fetchPosts.pending, (state, action)=> {
            state.status = 'loading'
         })
         .addCase(fetchPosts.fulfilled, (state, action)=> {
            state.status = 'succeeded'

            /* api doesn't have date and reation in it , so we need to add it manually */
            let min = 1;
            const loadedPosts = action.payload.map((post) => {
              return {
                ...post,
                date: sub(new Date(), { minutes: min++ }).toISOString(),
                reactions: {
                  thumbsUp: 0,
                  wow: 0,
                  heart: 0,
                  rocket: 0,
                  coffee: 0,
                },
              };
            });
            

            /* adding posts to the state */
            state.posts = state.posts.concat(loadedPosts)
         })
         .addCase(fetchPosts.rejected, (state, action)=> {
            state.status = 'failed'
            state.error = action.error.message
         })
    }
})

export const selectAllPosts = (state)=> state.posts.posts;
export const getPostsStatus = (state)=> state.posts.status;
export const getPostsError = (state)=> state.posts.error;
export const {postAdded, reactionAdded} = postsSlice.actions

export default postsSlice.reducer