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
    background-color: ${(props) => props.theme.background};
}

h1 {
    font-weight:600;
    color:${(props) => props.theme.text};
}

h2 {
    font-weight:500;
    color:${(props) => props.theme.text};
}

p {
    font-weight:400;
    color:${(props) => props.theme.text};
    font-size: 18px;
}

span {
    color:${(props) => props.theme.subText};
    font-size: 16px;
}

input[type=text] {
    color:${(props) => props.theme.text};
    background-color: ${(props) => props.theme.formBackground};
    font-size: 18px;
    padding:0.5rem 1rem;
    width:100%; 
    border-radius: 5px;
    
        ::placeholder {
            color:${(props) => props.theme.subText};
        }
    }
`;
