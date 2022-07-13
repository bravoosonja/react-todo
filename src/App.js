import styled from "styled-components";
// components
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoItem from "./components/TodoItem";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
// hooks
import { useLightMode } from "./hooks/useLightMode";
// styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/Themes";

function App() {
  const [theme, themeToggler, mountedComponent] = useLightMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Wrapper>
        <BackgroundImg />
        <Overlay>
          <Header theme={theme} toggleTheme={themeToggler} />
          <main>
            <NewTodo />
            <TodoItem />
            <Todos />
          </main>
        </Overlay>
      </Wrapper>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const BackgroundImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 375px) {
    background-image: url(${({ theme }) => theme.mobileBg});
    width: 100vw;
    height: 200px;
  }

  @media (min-width: 1440px) {
    background-image: url(${({ theme }) => theme.desktopBg});
    width: 100vw;
    height: 300px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 3vh;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div``;

export default App;
