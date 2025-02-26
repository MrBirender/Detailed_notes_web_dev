import React, { useRef, useMemo, use } from "react";
import Header2 from "./components/header2";
import { useEffect } from "react";
import { useState, useCallback } from "react";
/* use callback with memo */
const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const sayHai = useCallback(()=>{console.log('Hello world')}, [])

  return (
    <div className="absolute h-full flex flex-col gap-12 items-center justify-center w-full bg-black   text-white text-2xl">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border rounded-lg px-4 py-2"
      />

      <Header2 sayHai={sayHai}/>

      <p>Count: {count}</p>
      <button
        onClick={() => setCount((pre) => pre + 1)}
        className="px-4 py-2 mt-6 border bg-black rounded-lg"
      >
        Click Here
      </button>
    </div>
  );
};

export default App;
