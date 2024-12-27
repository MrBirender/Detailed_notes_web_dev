import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";


const AddTodo = () => {
    const [todoText, setTodoText] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(addTodo(todoText))
        setTodoText('')
    }
  return (
    <form className="flex w-full max-w-6xl mx-auto">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/80 rounded-l-lg px-3 outline-none
       duration-150 bg-white/20 py-4 text-xl"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="rounded-r-lg px-4 py-4 border border-black/80 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
