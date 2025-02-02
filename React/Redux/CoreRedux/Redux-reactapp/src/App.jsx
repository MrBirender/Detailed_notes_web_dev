import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './store'
import { bugAdded , bugRemoved, bugResolved, deleteAllBugs} from './actions'
function App() {
  const [count, setCount] = useState(0)
  
  const addBug = ()=> {
    store.dispatch(bugAdded('bug1'))
    console.log(store.getState())
  }

  const removeBug = ()=> {
    store.dispatch(bugRemoved(1))
    console.log(store.getState())
  }

  const resolveBug = ()=> {
    store.dispatch(bugResolved(2))
    console.log(store.getState())
  }

  const deleteAll = ()=> {
    store.dispatch(deleteAllBugs())
    console.log(store.getState())
  }
  
 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div  className="card">
        <button style={{marginRight: '20px'}} onClick={addBug}>
          add
        </button>
        <button style={{marginRight: '20px'}} onClick={removeBug}>
          remove
        </button>
        <button style={{marginRight: '20px'}} onClick={resolveBug}>
          resolve
        </button>
        <button style={{marginRight: '20px'}} onClick={deleteAll}>
          Delete All
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
