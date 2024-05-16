import React, { useState } from 'react';
import './App.css';
import TodoWorking from './component/TodoWorking'
import TodoDone from './component/TodoDone'
import TodoTemplate from './component/TodoTemplate';
import TodoAdd from './component/TodoAdd';
import CurrentDate from './component/CurrentDate';


function App() {
  const [todos, setTodo] = useState([
    {
      id: Date.now(),
      contents: '주 2회 클라이밍 가기',
    },
    {
      id: Date.now() + 1,
      contents: '식단 관리하기',
    },
  ]);

  const [doneTodo, setDoneTodo] = useState([]); //완료 배열 생성


  // 할 일 추가
  const onInsert = (contents) => {
    const newTodo = {
      id: Date.now(),
      contents: contents,
    };

    setTodo([...todos, newTodo]);
  };

  // 미완료 -> 삭제기능
  const onRemove = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  // 완료기능
  const onSuccess = (done) => {
    const newDoneTodo = {
      id: done.id,
      contents: done.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todos.filter((todo) => todo.id !== done.id));
  };


  // 완료 -> 삭제기능
  const onDoneRemove = (id) => {
    setDoneTodo(doneTodo.filter((done) => done.id !== id));
  };

  // 취소기능
  const onCancle = (todo) => {
    const newTodo = {
      id: todo.id,
      contents: todo.contents,
    };
    setTodo([...todos, newTodo]);
    setDoneTodo(doneTodo.filter((done) => todo.id !== done.id));
  };






  return (
    <>
      <TodoTemplate>
        <CurrentDate todos={todos} />

        {todos.map((todo) => {
          return (
            <TodoWorking
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onSuccess={onSuccess}
            />
          );
        })}



        {doneTodo.map((doneTodo) => {
          return (
            <TodoDone
              todo={doneTodo}
              key={doneTodo.id}
              onDoneRemove={onDoneRemove}
              onCancle={onCancle}
            />
          );
        })}

        <TodoAdd onInsert={onInsert} />
      </TodoTemplate>

    </>
  );
}

export default App;