import React from "react";
import deleteIcon from "../assets/delete.png";
import { IoCheckmark } from "react-icons/io5";
import { PiCircleLight } from "react-icons/pi";

const TodoWorking = ({ todo, onRemove, onToggle }) => {
  const { id, contents, isDone } = todo;
  return (
    <>
      <div className="todoItem" style={{ color: isDone ? "#ccc" : "#2e2e2e" }}>
        {isDone && <IoCheckmark onClick={() => onToggle(id)} />}
        {!isDone && <PiCircleLight onClick={() => onToggle(id)} />}
        <p className="content">{contents}</p>
        <button onClick={() => onRemove(id)}>
          <img src={deleteIcon} />
        </button>
      </div>
    </>
  );
};

export default TodoWorking;
