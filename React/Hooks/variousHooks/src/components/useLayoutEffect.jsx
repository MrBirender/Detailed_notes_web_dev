import React, { useEffect, useLayoutEffect } from 'react'

const App = () => {


  useEffect(()=> {
    console.log('useEffect called')
  },[])

  useLayoutEffect(()=> {
    console.log('useLayoutEffect called')
  }, [])


  return (
    <div className='flex flex-col items-center h-screen bg-black text-white text-4xl '>
      <h2 className='animate-bounce'>Hello World</h2>
      <h2 className='animate-ping'>Hello World</h2>
    </div>
  )
}

export default App
