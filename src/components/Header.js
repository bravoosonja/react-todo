import styled from "styled-components";
// icons
import { ReactComponent as Sun } from "../assets/images/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/images/icon-moon.svg";

export default function Header({ theme, toggleTheme }) {
  return (
    <Wrapper>
      <h1>TODO</h1>
      <StyledButton theme={theme} onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 1.3rem;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
