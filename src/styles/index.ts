import { createGlobalStyle } from "styled-components";
import { ThemeParams } from "../App/interface";

import PoppinsRegularTtf from "../assets/fonts/Poppins/PoppinsRegular.ttf";
import PoppinsRegularWoff from "../assets/fonts/Poppins/PoppinsRegular.woff";
import PoppinsRegularWoff2 from "../assets/fonts/Poppins/PoppinsRegular.woff2";

import PoppinsMediumTtf from "../assets/fonts/Poppins/PoppinsMedium.ttf";
import PoppinsMediumWoff from "../assets/fonts/Poppins/PoppinsMedium.woff";
import PoppinsMediumWoff2 from "../assets/fonts/Poppins/PoppinsMedium.woff2";

import PoppinsSemiboldTtf from "../assets/fonts/Poppins/PoppinsSemibold.ttf";
import PoppinsSemiboldWoff from "../assets/fonts/Poppins/PoppinsSemibold.woff";
import PoppinsSemiboldWoff2 from "../assets/fonts/Poppins/PoppinsSemibold.woff2";

import Roboto from "../assets/fonts/Roboto/Roboto.ttf";
import JetBrains from "../assets/fonts/JetBrains/JetBrains.ttf";

const GlobalStyle = createGlobalStyle<ThemeParams>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  button,
  button:focus {
    outline: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:active {
    outline: none;
    background: transparent;
  }

  @font-face {
    font-family: PoppinsRegular;
    src:
      url(${PoppinsRegularWoff2}) format("woff2"),
      url(${PoppinsRegularWoff}) format("woff"),
      url(${PoppinsRegularTtf}) format("truetype");
  }

  @font-face {
    font-family: PoppinsMedium;
    src:
    url(${PoppinsMediumWoff2}) format("woff2"),
      url(${PoppinsMediumWoff}) format("woff"),
      url(${PoppinsMediumTtf}) format("truetype");
  }

  @font-face {
    font-family: PoppinsSemibold;
    src:
    url(${PoppinsSemiboldWoff2}) format("woff2"),
      url(${PoppinsSemiboldWoff}) format("woff"),
      url(${PoppinsSemiboldTtf}) format("truetype");
  }

  @font-face {
    font-family: Roboto;
    src:
      url(${Roboto}) format("truetype");
  }

  @font-face {
    font-family: JetBrains;
    src:
      url(${JetBrains}) format("truetype");
  }
`;

export { GlobalStyle };
