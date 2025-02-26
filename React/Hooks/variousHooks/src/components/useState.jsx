

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(pre => pre + 1);
    setCount(pre => pre + 1);
    setCount(pre => pre + 1);
    setCount(pre => pre + 1);
  }


  // const increment = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);

  // }
  

 
  return (
    <div className='absolute h-full w-full bg-blue-900 px-32 py-32 text-white text-3xl'>
      <p className='capitalize'>counter: {count} </p>
      <button onClick={increment}  className='px-4 py-2 mt-6 border bg-black rounded-lg'>Increase</button>
    </div>
  )
}

export default App
