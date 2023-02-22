import { Action as ReduxAction } from "redux";
import { AddPageParams } from "./addPages/interface";
import { PopupTypeParams } from "./popupType/interface";
import { ToggleMenuParams } from "./toggleMenu/interface";

export interface Action<MetaType = never> extends ReduxAction {
  meta?: MetaType;
}

export interface AppState {
  toggleMenu: ToggleMenuParams;
  pages: AddPageParams;
  popup: PopupTypeParams;
}
