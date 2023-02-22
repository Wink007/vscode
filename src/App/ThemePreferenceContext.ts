import { createContext } from "react";
import { ThemeContextParams } from "./interface";

export const ThemePreferenceContext = createContext<ThemeContextParams>({
  currentTheme: "",
  setCurrentThemeAndSavePref: () => {},
});
