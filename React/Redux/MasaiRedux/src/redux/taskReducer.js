
const initialState = {
    todos : [],
}
const taskReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "ADD_TASK" :
            return {...state, todos:[...state.todos, {id: Date.now(), text:payload, completed:false} ]}

        case "UPDATE_TASK":
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === payload.id ? {...todo, text:payload.text , completed:false} :todo))

            }
        case "TOGGLE_TASK":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, completed: !todo.completed}: todo)
            }

        case "DELETE_TASK":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }

        default:
            return state
    }
}

export default taskReducer

