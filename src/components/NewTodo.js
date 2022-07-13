import { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";
import styled from "styled-components";

export default function NewTodo() {
  const todoCtx = useContext(TodoContext);

  const textInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    //<Wrapper>
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="text"
        ref={textInputRef}
        placeholder="Add new todo"
      />
      <button type="submit" onClick={submitHandler}>
        Add to do
      </button>
    </form>
    //</Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  /* button {
    display: none;
  } */
`;
