import styled from "styled-components";

export default function TodoItem({ text, onRemoveTodo }) {
  return <p onClick={onRemoveTodo}>{text}</p>;
}
