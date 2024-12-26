import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoForm() {
  const {createTodo } = useTodo();
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    createTodo(newTodo);
  };

  return (
    <form className="flex">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none
         duration-150 bg-white/20 py-4 text-xl"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="rounded-r-lg px-4 py-4 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
