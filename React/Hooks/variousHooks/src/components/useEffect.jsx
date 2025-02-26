import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10)
  const [age, setAge] = useState(4)

  /* without dependency array it will run on every render */
  useEffect(()=> {
    setTimeout(()=> {
      setCount(pre => pre + 1);
    }, 2000)
  })

  /* if i pass one dependency array then it will run only one time */

  useEffect(()=> {
    setTimeout(()=> {
      setTime(pre => pre + 1);
    }, 2000)
  }, [])

  /* if i pass any vairble in the dependency array then it will depend on that to render
  it that var changes then it will run. */

  useEffect(()=> {
    setTimeout(()=> {
      setAge(pre => pre + 1);
    }, 2000)
  }, [count])
  

 
  return (
    <div className='absolute h-full w-full bg-blue-900 px-32 py-32 text-white text-3xl'>
      <p className='capitalize flex gap-10'>counter: {count}, <span>{time}</span>, {age} </p>
      <button  className='px-4 py-2 mt-6 border bg-black rounded-lg'>Increase</button>
    </div>
  )
}

export default App
