import { createContext } from "react";

interface CustomLayoutContextProps {
  isActivityBarOpened: boolean;
  setIsActivityBarOpened: (value: boolean) => void;
  isPrimarySideBarOpened: boolean;
  setIsPrimarySideBarOpened: (value: boolean) => void;
  isStatusBarOpened: boolean;
  setIsStatusBarOpened: (value: boolean) => void;
  layoutSideBarPosition: string;
  setLayoutSideBarPosition: (value: string) => void;
}

export const CustomLayoutContext = createContext<CustomLayoutContextProps>({
  isActivityBarOpened: true,
  isPrimarySideBarOpened: true,
  isStatusBarOpened: true,
  layoutSideBarPosition: "left",
  setIsActivityBarOpened: () => {},
  setIsPrimarySideBarOpened: () => {},
  setIsStatusBarOpened: () => {},
  setLayoutSideBarPosition: () => {},
});
