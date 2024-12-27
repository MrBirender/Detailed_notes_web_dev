import React from 'react'
import AddTodo from './components/AddTodo'

const App = () => {
  return (
    <div className='px-10 pt-12 min-h-screen bg-green-100 '>
      <h1 className='text-center text-4xl mb-8 font-serif font-medium'>Todo App</h1>
     <AddTodo/>
    </div>
  )
}

export default App
