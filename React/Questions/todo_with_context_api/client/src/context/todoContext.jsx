import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();


// custom hook:

export const useTodo = ()=>{
   return useContext(TodoContext)
}
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // createTodo:
  const createTodo = (newTodo) => {
    setTodos((pre) => [...pre, newTodo]);
  };

  const editTodo = (id, todoMsg) => {
    setTodos((pre) => pre.map((todo) => (todo.id === id ? {...todo, text:todoMsg} : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? {...todo, completed : !todo.completed} : todo
      )
    );
  };


  const value = {
    todos,
    setTodos,
    createTodo, 
    editTodo,
    deleteTodo, 
    toggleCompleted
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};


