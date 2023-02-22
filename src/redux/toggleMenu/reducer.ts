import { ToggleMenuParams } from "./interface";
import { TOGGLE } from "./constants";
import { Action } from "../store.interface";

const initialState: ToggleMenuParams = {
  isMenuOpened: true,
};

export const toggleReducer = (
  state = initialState,
  action: Action<ToggleMenuParams>
) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, isMenuOpened: !state.isMenuOpened };
    default:
      return { ...state };
  }
};
