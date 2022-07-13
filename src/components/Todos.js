import { useContext } from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

export default function Todos() {
  const todoCtx = useContext(TodoContext);

  return (
    // <Wrapper>
    <ul>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
    // </Wrapper>
  );
}

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40vw;
//   height: 100%;
// `;
