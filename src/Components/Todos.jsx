import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((i) => (
        <li key={i.id}>
          {i.text}
          <button onClick={() => dispatch(removeTodo(i.id))}>X</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
