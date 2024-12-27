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
    <form className="flex justify-center gap-8 w-full max-w-4xl mx-auto  text-white text-xl font-medium">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="bg-gray-950 px-8 py-4 w-[60%] rounded-lg"
        
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-[40%] bg-blue-600 rounded-lg hover:scale-105"
        
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
