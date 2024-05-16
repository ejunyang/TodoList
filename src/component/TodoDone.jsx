import React from 'react'
import deleteIcon from '../assets/delete.png';
import { IoCheckmark } from "react-icons/io5";

const TodoDone = ({ todo, onDoneRemove, onCancle}) => {
  const { id, contents } = todo;

  return (
    <div className='todoItem'>
      <IoCheckmark onClick={() => onCancle(todo)}/>
      <p className='content' style={{color:'#ccc'}}>{contents}</p>
      <button onClick={() => onDoneRemove(id)}><img src={deleteIcon} /></button>
    </div>
  );
}

export default TodoDone