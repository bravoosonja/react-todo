import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Drag and drop to reorder list</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  padding: 2.5rem;
  p {
    color: ${({ theme }) => theme.subText};
  }
`;
