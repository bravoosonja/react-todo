import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

export default function Todos() {
  const todoCtx = useContext(TodoContext);

  return (
    <>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </>
  );
}
