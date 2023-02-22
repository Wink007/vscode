import { PopupTypeParams } from "./interface";
import { POPUP_TYPE } from "./constants";
import { Action } from "../store.interface";
import { Settings } from "../../pages/Layout/components/MenuBar/components/Settings/component/ContentInside/data";

const initialState: PopupTypeParams = {
  popupType: Settings.customizeLayout,
};

export const setPopupTypeReducer = (
  state = initialState,
  action: Action<PopupTypeParams>
) => {
  switch (action.type) {
    case POPUP_TYPE:
      return { ...state, popupType: action.meta };
    default:
      return { ...state };
  }
};
