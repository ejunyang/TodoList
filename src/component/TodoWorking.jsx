import React from 'react'
import deleteIcon from '../assets/delete.png';
import { PiCircleLight } from "react-icons/pi";


const TodoWorking = ({todo, onRemove, onSuccess}) => {
  const { id, contents} = todo;
  return (
    <div className='todoItem'>
      <PiCircleLight onClick={() => onSuccess(todo)}/>
      <p className='content'>{contents}</p>
      <button onClick={() => onRemove(id)}><img src={deleteIcon} /></button>
    </div>
  );
}

export default TodoWorking