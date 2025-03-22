import './App.css'
import React from 'react'
import TaskManager from './components/TaskManager'


const App = () => {
  return (
    <div className='bg-red-500 mx-auto w-full'>
      <h1>Task Manager</h1>
      <TaskManager/>
    </div>
  )
}

export default App


