import React from "react";
import { useState, useRef, useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi2";

const TodoAdd = ({ onInsert }) => {
  const [contents, setContents] = useState("");
  const [open, setOpen] = useState(false); //인풋창 띄우기(현재 false)
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current !== null) inputEl.current.focus(); //자동커서
  });

  const onChange = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 막기

    if (contents === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    onInsert(contents);
    setOpen(false);
    setContents(""); //빈칸
  };

  const addBtnstyle = {
    width: "60px",
    height: "60px",
    background: "#557BB5",
    borderRadius: "150px",
    color: "white",
    fontSize: "30px",
    fontWeight: "300",
    position: "absolute",
    bottom: "30px",
    right: "30px",
    lineHeight: "2.2em",
    cursor: "pointer",
  };

  return (
    <>
      {open && (
        <div className="inserPosition">
          <form className="insertForm" onSubmit={onSubmit}>
            <p className="modalTitle">Today</p>
            <input
              type="text"
              ref={inputEl}
              value={contents}
              placeholder="할 일을 입력하고 Enter를 눌러주세요."
              onChange={onChange}
            />
          </form>
        </div>
      )}
      <button
        style={addBtnstyle}
        className={`rotateBtn ${open ? "rotated" : ""}`}
        onClick={() => setOpen(!open)}
        open={open}
      >
        <HiOutlinePlus style={{ color: "#fff", margin: "0" }} />
      </button>
    </>
  );
};

export default TodoAdd;
