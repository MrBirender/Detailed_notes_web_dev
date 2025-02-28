import React from "react";
import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
        
      case "DECREMENT":
        return { count: state.count - 1 };


      case "INPUT":
        console.log(typeof action.payload)
         return {count: action.payload};

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="absolute h-full flex flex-col gap-12 items-center justify-center w-full bg-black   text-white text-2xl">
      <p>count: {state.count} </p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="px-4 py-2 mt-6 border bg-black rounded-lg"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="px-4 py-2 mt-6 border bg-black rounded-lg"
      >
        Decrement
      </button>
      <input className="border p-4" value={state.count} type="text" onChange={(e) => dispatch({type: 'INPUT', payload:Number(e.target.value)})} />
    </div>
  );
};

export default App;
