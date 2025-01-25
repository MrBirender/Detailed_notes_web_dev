import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import React from "react";


const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
  return (
    <section className="relative text-4xl min-h-screen flex flex-col items-center justify-center">
    <h1 className="absolute top-5 left-atuo">Counter with Redux Toolkit</h1>
    <p className="text-7xl -mt-20">{count}</p>
    <div className="text-5xl flex gap-5 mt-10">
      <button className="border-2 p-2 w-20 h-20 border-gray-500 bg-gray-100" onClick={() => dispatch(increment())}>+</button>
      <button className="border-2 p-2 w-20 h-20 border-gray-500 bg-gray-100" onClick={() => dispatch(decrement())}>-</button>
    </div>
  </section>
  
  )  
}

export default Counter
