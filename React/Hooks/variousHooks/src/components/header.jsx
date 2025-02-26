import React, {memo} from 'react'

const header = () => {
    console.log('Header component rendered!')
  return (
    <div>
      Header
    </div>
  )
}

export default memo(header)
