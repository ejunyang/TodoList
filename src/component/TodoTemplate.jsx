import React from 'react'
import Icons from './Icons'

const TodoTemplate = ({children}) => {
  return (
    <div className='template'>
      <div className='wrap'>
        <Icons/>
        {children}
        </div>
    </div>
  )
}

export default TodoTemplate