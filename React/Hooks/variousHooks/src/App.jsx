import React from 'react'
import useLocalStorage from './components/useLocalStorage'
const App = () => {
const [name, setName] = useLocalStorage('userName', 'Stranger')
const [id, setId] = useLocalStorage('userId', '001')

  return (
    <div className='flex flex-col pt-24 items-center h-screen bg-black text-white text-4xl '>
      <input value={name} className='border p-4' type="text" onChange={(e)=> setName(e.target.value)} />

      <p className='mt-6 text-6xl '>Hello {name} !</p>

      <input value={id} className='border p-4' type="text" onChange={(e)=> setId(e.target.value)} />

      <p className='mt-6 text-6xl '>Your id is {id}!</p>
    </div>
  )
}

export default App
