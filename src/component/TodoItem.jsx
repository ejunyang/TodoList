import React from "react";
import deleteIcon from "../assets/delete.png";
import { IoCheckmark } from "react-icons/io5";
import { PiCircleLight } from "react-icons/pi";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, contents, isDone } = todo;
  return (
    <>
      <div className="todoItem" style={{ color: isDone ? "#ccc" : "#2e2e2e" }}>
        {isDone && (
          <IoCheckmark className="check" onClick={() => onToggle(id)} />
        )}
        {!isDone && (
          <PiCircleLight className="check" onClick={() => onToggle(id)} />
        )}
        <p className="content">{contents}</p>
        <button onClick={() => onRemove(id)}>
          <img src={deleteIcon} />
        </button>
      </div>
    </>
  );
};

export default TodoItem;
