import {
  BaseFontsParams,
  LineHeightsParams,
  StringMap,
} from "../theme/interface";

export interface ThemePropsParams {
  fonts: BaseFontsParams;
  colors: StringMap;
  lineHeights: LineHeightsParams;
}

export interface ThemeParams {
  theme: ThemePropsParams;
}

export interface ThemeContextParams {
  currentTheme: string;
  setCurrentThemeAndSavePref: (param: string) => void;
}
