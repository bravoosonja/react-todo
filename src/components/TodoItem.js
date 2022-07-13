import styled from "styled-components";

export default function TodoItem(props) {
  return (
    <Wrapper>
      <li onClick={props.onRemoveTodo}>{props.text}</li>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 100%;
`;
