import './App.css'
import React from 'react'
import FormUsingUseState from './components/FormUsingUseState';
import FormUsingReducer from './components/FormUsingReducer';

const App = () => {
  return (
    <div>
      <FormUsingReducer/>
      {/* <FormUsingUseState/> */}
    </div>
  )
}

export default App


