import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCookies } from "react-cookie";

import {
  base,
  vscodeDefault,
  vscodeWebstormDarcula,
  lightPlus,
} from "../theme/theme";

import { GlobalStyle } from "../styles";
import { ThemeParams } from "./interface";
import { ThemePreferenceContext } from "./ThemePreferenceContext";
import { Pages } from "../pages";

export const themesMap = {
  vscodeDefault,
  vscodeWebstormDarcula,
  lightPlus,
};

const App = ({ initialTheme = "vscodeDefault", initialCustomTheme = {} }) => {
  // Store the users theme preference in state
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const [customTheme, setCustomTheme] = useState(initialCustomTheme);

  const [cookies, setCookie] = useCookies();
  const { themePreference } = cookies;

  // Function to update the current theme in state, and also save to a cookie
  const setCurrentThemeAndSavePref = (theme: string) => {
    setCurrentTheme(theme);
    setCookie("themePreference", theme, {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
  };

  // Function to update the current custom theme values in state, and also save to a cookie
  const setCustomThemeAndSavePref = (theme: ThemeParams) => {
    setCustomTheme(theme);
    setCookie("customTheme", JSON.stringify(theme), {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
  };

  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
    // If the user has not set a preference yet, set to their OS theme
    if (!themePreference)
      setCurrentThemeAndSavePref(themeQuery.matches ? "vscodeDefault" : "dark");
    // If the user is using a theme other than light/dark, don't change it based on their OS
    if (initialTheme === "vscodeDefault" || initialTheme === "dark") {
      themeQuery.addEventListener("change", ({ matches }) => {
        setCurrentThemeAndSavePref(matches ? "vscodeDefault" : "dark");
      });
    }
  });

  const theme = {
    ...base,
    colors:
      currentTheme === "custom"
        ? Object.keys(customTheme).length
          ? customTheme
          : themesMap.vscodeDefault
        : (themesMap as any)[currentTheme],
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://microsoft.github.io/vscode-codicons/dist/codicon.css"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThemePreferenceContext.Provider
          value={
            {
              currentTheme,
              setCurrentTheme,
              setCurrentThemeAndSavePref,
              customTheme,
              setCustomTheme,
              setCustomThemeAndSavePref,
            } as any
          }
        >
          <Pages />
        </ThemePreferenceContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
