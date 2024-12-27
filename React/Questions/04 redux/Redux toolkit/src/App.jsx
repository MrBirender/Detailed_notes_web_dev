import React from 'react'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

const App = () => {
  return (
    <div className='px-10 pt-12 min-h-screen bg-gray-500 '>
      <h1 className='text-center text-4xl mb-16 font-serif font-medium'>Learn About Redux Toolkit</h1>
     <AddTodo/>
     <TodoItems/>
    </div>
  )
}

export default App
