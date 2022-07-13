import styled from "styled-components";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

export default function Todos() {
  const todoCtx = useContext(TodoContext);

  return (
    <Wrapper>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
`;
