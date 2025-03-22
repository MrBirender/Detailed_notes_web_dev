import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";



const TaskManager = () => {
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.tasks.todos)
    

    const handleAddTask = () => {
        if(editId){
            dispatch({type:'UPDATE_TASK', payload:{id:editId, text:input}})
        }else{
            dispatch({type:'ADD_TASK', payload:input})
            setInput('')
        }
    }

    const handleDelteTask = (id) => {
        dispatch({type:'DELETE_TASK', payload:id})
    }

    const handleUpdateTask = (id, text) => {
       setEditId(id)
       setInput(text)
        
    }

    const handleToggleTask = (id) => {
        dispatch({type: 'TOGGLE_TASK', payload:id})

    }


  return (
    <div className="bg-white mt-10 pl-6  text-black py-4 w-full">
      <input value={input} onChange={(e)=> setInput(e.target.value)} className="px-2 py-2 border border-black rounded-md" type="text" placeholder="Enter task" />
      <button onClick={handleAddTask} className="text-white ml-4">Add Task</button>
      
      {/* todos rendered from store */}
      <div className="my-10">
      {todos.length === 0 ? <h1>Add Todo</h1> : <ul className="space-y-6">
        {todos.map(({id, text, completed})=> (
            <li className={`${completed ? 'line-through leading-none': ''}`}  key={id}>
             <span className="text-2xl">{text}</span>
            <button onClick={()=> handleToggleTask(id)}  className="text-white ml-4">{completed ? 'undo': 'Mark Completed'}</button>
            <button onClick={()=> handleDelteTask(id)}  className="text-white ml-4">Delete</button>
            <button onClick={()=> handleUpdateTask(id, text)} className="text-white ml-4">Edit</button>
            </li>
         
        ))}
        
        </ul>}
      </div>
    </div>
  )
}

export default TaskManager
