import styled from "styled-components";

export default function TodoItem(props) {
  return <p onClick={props.onRemoveTodo}>{props.text}</p>;
}
