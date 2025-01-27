import React from 'react'
import PostList from './features/post/postList'
import AddPostForm from './features/post/AddPost'

const App = () => {
  return (
    <div className='bg-slate-600 min-h-screen'>
     <PostList/>
     <AddPostForm/>
    </div>
  )
}

export default App
