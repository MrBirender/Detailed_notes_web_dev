import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import { useTodo } from "./context/todoContext";
import TodoItem from "./components/TodoItems";



const App = () => {
  
  const {todos, setTodos} = useTodo()
  
  // getting data from local storage:
  useEffect(()=> {
    const storedTodo = localStorage.getItem('todos');
    if(setTodos){
      setTodos(JSON.parse(storedTodo))
    }
  },[setTodos])
  
  useEffect(()=> {
     localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo)=> (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default App;
