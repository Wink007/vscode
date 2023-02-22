import { BaseParams, StringMap } from "./interface";

export const base: BaseParams = {
  breakpoints: ["768px"],
  space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px", "128px", "256px"],
  sizes: {
    body: "800px",
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  fontSizes: [
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "36px",
    "48px",
    "60px",
    "80px",
    "96px",
  ],
  fontWeights: {
    heading: 700,
    mid: 600,
    body: 400,
  },
  lineHeights: {
    heading: 1.2,
    body: 1.4,
  },
  radii: ["2px", "4px", "8px"],
};

export const light: StringMap = {
  menuBarBackground: "#43484a",
  sideBarBackground: "#252526",
  blockBorderColor: "rgba(204, 204, 204, 0.2)",
  activeLink: "#002b42",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",

  primary: "#4851f4",
  background: "#ffffff",
  nav: "#f8f8f8",
  border: "#deebf1",
  text: "#202224",
  grey: "#aaaaaa",
  error: "#ff3333",
};

export const dark: StringMap = {
  menuBarBackground: "#43484a",
  sideBarBackground: "#252526",
  blockBorderColor: "rgba(204, 204, 204, 0.2)",
  activeLink: "#002b42",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",

  primary: "#4851f4",
  background: "#1f2023",
  nav: "#27282b",
  border: "#303236",
  text: "#f8f8f8",
  grey: "#aaaaaa",
  error: "#ff3333",
};

export const solarizedLight: StringMap = {
  menuBarBackground: "#43484a",
  sideBarBackground: "#252526",
  blockBorderColor: "rgba(204, 204, 204, 0.2)",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",
  activeLink: "#002b42",

  primary: "#4851f4",
  background: "#fdf6e3",
  nav: "#eee8d5",
  border: "#eee8d5",
  text: "#002b36",
  grey: "#586e75",
  error: "#dc322f",
};

export const solarizedDark: StringMap = {
  menuBarBackground: "#43484a",
  sideBarBackground: "#252526",
  blockBorderColor: "rgba(204, 204, 204, 0.2)",
  activeLink: "#002b42",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",

  primary: "#4851f4",
  background: "#002b36",
  nav: "#073642",
  border: "#073642",
  text: "#839496",
  grey: "#586e75",
  error: "#dc322f",
};

export const vscodeDefault: StringMap = {
  menuBarBackground: "#333333",
  sideBarBackground: "#252526",
  blockBorderColor: "rgba(204, 204, 204, 0.2)",
  activeLink: "#37373d",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",
  background: "#1e1e1e",

  primary: "#4851f4",
  nav: "#073642",
  border: "#073642",
  text: "#839496",
  grey: "#586e75",
  error: "#dc322f",
};

export const vscodeWebstormDarcula: StringMap = {
  menuBarBackground: "#43484a",
  sideBarBackground: "#3b3f41",
  blockBorderColor: "#49494a",
  activeLink: "#2A2D2E",

  mainTitleBackground: "#252526",
  mainSubtitleBackground: "#2b2b2b",
  background: "#2b2b2b",

  primary: "#4851f4",
  nav: "#073642",
  border: "#073642",
  text: "#839496",
  grey: "#586e75",
  error: "#dc322f",
};
