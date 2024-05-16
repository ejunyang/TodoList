import React, { useState } from "react";
import "./App.css";
import TodoTemplate from "./component/TodoTemplate";
import TodoAdd from "./component/TodoAdd";
import CurrentDate from "./component/CurrentDate";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodo] = useState([
    {
      id: Date.now(),
      contents: "주 2회 클라이밍 가기",
      isDone: false,
    },
    {
      id: Date.now() + 1,
      contents: "식단 관리하기",
      isDone: false,
    },
  ]);

  // 할 일 추가
  const onInsert = (contents) => {
    const newTodo = {
      id: Date.now(),
      contents: contents,
    };

    setTodo([...todos, newTodo]);
  };

  // 삭제기능
  const onRemove = (id) => {
    //내가 선택한 요소를 빼고 나머지를 새배열로 반환
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <>
      <TodoTemplate>
        <CurrentDate todos={todos} />
        <TodoList
          key={todos.id}
          todos={workingTodo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        <TodoList
          key={todos.id}
          todos={doneTodo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        <TodoAdd onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
