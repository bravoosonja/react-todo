import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'Albert Sans', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.background};
}

h1 {
    font-weight:600;
    color: ${({ theme }) => theme.text};
}

h2 {
    font-weight:500;
    color: ${({ theme }) => theme.text};
}

p {
    font-weight:400;
    color: ${({ theme }) => theme.text};
    font-size: 18px;
}

span {
    color: ${({ theme }) => theme.subText};
    font-size: 16px;
}

input[type=text] {
    color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.formBackground};
    font-size: 18px;
    padding:0.5rem 1rem;
    width:100%; 
    border-radius: 5px;
    
        ::placeholder {
            color: ${({ theme }) => theme.subText};
        }
    }
`;
