import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import theme from "./theme";

const RecetCSS = createGlobalStyle`
  *,::after,::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
  }

  button,a{
    cursor: pointer;
    font-size: 1em;
    text-decoration: none;
    text-transform: none;
    color: inherit;
    background-color: transparent;
    border: none;
  }
`;

const AppInterface = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <RecetCSS />
    </ThemeProvider>
  );
};

export default AppInterface;
