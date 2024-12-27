import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
     dispatch(removeTodo(id))
  }
  return (
    <>
      <h1 className="text-center mt-12 text-3xl font-serif font-medium ">
        Todos
      </h1>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between rounded-lg bg-slate-900 text-white px-8 py-4 my-8 max-w-5xl mx-auto">
          <p className="pl-8 text-2xl">{todo.text}</p>
          <button onClick={()=> handleDelete(todo.id)}>
            <p className="bg-red-500 w-12 h-12 flex items-center justify-center text-2xl font-bold rounded-xl">
              X
            </p>
          </button>
        </div>
      ))}
    </>
    /*
     */
  );
};

export default TodoItems;
