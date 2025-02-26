import React, { useRef , useMemo, use} from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  
  const cubeNum = (num)=> {
    console.log('calculation done !')
    return Math.pow(num, 3);
  }

  const result  = useMemo(()=> cubeNum(input), [input]);
 
  return (
    <div className='absolute h-full flex flex-col gap-12 items-center justify-center w-full bg-black   text-white text-2xl'>
      <input onChange={(e) => setInput(e.target.value)} type="text" className='border rounded-lg px-4 py-2'  />

       <h2>cube of the number is: {result}</h2>
       <p>Count: {count}</p>
      <button onClick={()=> setCount(pre => pre + 1)} className='px-4 py-2 mt-6 border bg-black rounded-lg'>Click Here</button>
    </div>
  )
}

export default App
