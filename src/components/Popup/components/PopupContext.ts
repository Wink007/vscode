import { createContext } from "react";
import { PopupContextParams } from "../interface";

export const PopupContext = createContext<PopupContextParams>({
  isPopupOpened: false,
  handlePopupToggle: () => {},
});
