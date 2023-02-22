import { FunctionComponent } from "react";

export interface PopupContextParams {
  isPopupOpened: boolean;
  handlePopupToggle: () => void;
}

export interface PopupDataProps {
  Component: FunctionComponent;
}
