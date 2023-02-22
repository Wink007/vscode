import { combineReducers } from "redux";
import { toggleReducer } from "./toggleMenu/reducer";
import { addPageReducer } from "./addPages/reducer";
import { setPopupTypeReducer } from "./popupType/reducer";

export const rootReducer = combineReducers({
  toggleMenu: toggleReducer,
  pages: addPageReducer,
  popup: setPopupTypeReducer,
});

export type RootState = any;
