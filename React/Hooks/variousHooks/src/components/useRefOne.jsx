import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);

  useEffect(() => {
    value.current = value.current + 1
  }, [count]);
   

  

 
  return (
    <div className='absolute h-full flex flex-col gap-24 items-center justify-center w-full bg-black px-32 py-32 text-white text-5xl'>
     <button onClick={() => setCount(pre => pre -1)}  className='px-4 py-2 mt-6 border bg-black rounded-lg'>Decrement</button>
      <p className='capitalize flex gap-10'>counter: {count} </p>
      <p>value: {value.current}</p>
      <button onClick={()=> setCount(pre => pre + 1)}  className='px-4 py-2 mt-6 border bg-black rounded-lg'>Increment</button>
    </div>
  )
}

export default App
