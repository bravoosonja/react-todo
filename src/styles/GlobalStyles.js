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
    width:100%;
    height:100vh;
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

ul,li {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.formBackground};
  font-size: 18px;
  padding: 1rem 1.3rem;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  list-style: none;

  :focus {
            outline: 1px solid  ${({ theme }) => theme.text};
        }
}

input[type=text] {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.formBackground};
    font-size: 18px;
    padding:1rem 1.3rem;
    width:100%; 
    border-radius: 5px;
    outline: none;
    border:none;

        ::placeholder {
            color: ${({ theme }) => theme.subText};
        }

        :focus {
            outline: 1px solid  ${({ theme }) => theme.text};
           
        }

        :active {
            background-color: ${({ theme }) => theme.formBackground};
            color: ${({ theme }) => theme.text};
            outline: 1px solid  ${({ theme }) => theme.text};
        }
}

form {
    width:40vw;
    input {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
}

`;
