import React from "react";
import TodoWorking from "./TodoWorking";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoWorking
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
