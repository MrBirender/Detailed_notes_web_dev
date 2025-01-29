
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       postAdded: (state, action) => {
           state.push(action.payload)
       }
    }
})


// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//        postAdded: {
//         reducer(state, action) {
//             state.push(action.payload)
//         }
//        }
//     }
// })