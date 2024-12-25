import React, {createContext, useContext} from "react";
import { useState } from "react";

// creating context:
const TodoContext = createContext();

//defining the provider:

const TodoProvider = ({children})=> {
   const [todos, setTodos] = useState([]);

   const value = {todos, setTodos}

   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

//custom hook to use the context:
const useTodo = ()=> {
   return useContext(TodoContext)
}

export {TodoProvider, TodoContext, useTodo}