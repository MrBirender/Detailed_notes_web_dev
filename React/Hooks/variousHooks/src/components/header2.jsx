import React, {memo} from 'react'

const header2 = ({sayHai}) => {
    console.log('Header 2 component rendered!')
  return (
    <div>
     <h1>Header 2</h1>
      <button onClick={sayHai}>wave</button>
    </div>
  )
}

export default memo(header2)
