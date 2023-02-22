export interface BaseFontsParams {
  heading: string;
  body: string;
}

export interface LineHeightsParams {
  heading: number;
  body: number;
}
export interface BaseParams {
  breakpoints: string[];
  space: string[];
  sizes: {
    body: string;
  };
  fonts: BaseFontsParams;
  fontSizes: string[];
  fontWeights: {
    heading: number;
    mid: number;
    body: number;
  };
  lineHeights: LineHeightsParams;
  radii: string[];
}

export interface StringMap {
  [key: string]: string;
}
