import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const inputElement = useRef()
   
 const btnClicked = ()=> {
  inputElement.current.style.backgroundColor = 'red';
  console.log(inputElement.current)
 }
  

 
  return (
    <div className='absolute h-full flex flex-col gap-12 items-center justify-center w-full bg-black   text-white text-2xl'>
      <input ref={inputElement} type="text" className='border rounded-lg px-4 py-2'  />
      
      <button onClick={btnClicked} className='px-4 py-2 mt-6 border bg-black rounded-lg'>Click Here</button>
    </div>
  )
}

export default App
