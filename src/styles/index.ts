import { createGlobalStyle } from "styled-components";
import { ThemeParams } from "../App/interface";

export const GlobalStyle = createGlobalStyle<ThemeParams>(
  ({ theme: { colors } }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: ${colors.background};
    color: ${colors.primaryColor};
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  button, button:focus{
    outline: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:active{
    outline: none;
    background: transparent;
  }
`
);
