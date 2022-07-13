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
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2.5rem 0;
  p {
    color: ${({ theme }) => theme.subText};
    font-size: 16px;
    font-style: italic;
  }
`;
