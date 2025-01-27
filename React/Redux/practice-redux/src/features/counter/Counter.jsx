import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import React, { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount || 0);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
    
  };
  return (
    <section className="relative text-2xl min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="absolute text-4xl top-5 left-auto">
        Counter with Redux Toolkit
      </h1>
      <p className="text-7xl -mt-10">{count}</p>
      <div className="text-5xl flex gap-5 mt-10">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 p-2 w-20 h-20 border-gray-500 bg-gray-100"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="border-2 p-2 w-20 h-20 border-gray-500 bg-gray-100"
        >
          -
        </button>
      </div>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className="border-2 px-4 py-2 w-1/2"
        type="number"
        placeholder="Enter the rate of increment"
      />
      <div className="flex gap-4">
        <button className="border-2 px-4 py-2  border-gray-500 bg-gray-100" onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button className="border-2 px-4 py-2  border-gray-500 bg-gray-100" onClick={()=> resetAll()}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
