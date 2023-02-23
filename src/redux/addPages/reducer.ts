import { PAGE_ADD, REMOVE_PAGE } from "./constants";
import { Action } from "../store.interface";
import { AddPageParams } from "./interface";

const initialState: AddPageParams = {
  pages: [],
};

export const addPageReducer = (
  state: AddPageParams = initialState,
  action: Action
) => {
  switch (action.type) {
    case PAGE_ADD:
      if (action.meta && state.pages.includes(action.meta)) {
        return { ...state };
      }

      return {
        ...state,
        pages: [...state.pages, action.meta],
      };

    case REMOVE_PAGE:
      return {
        ...state,
        pages: state.pages.filter((page) => page !== action.meta),
      };
    default:
      return { ...state };
  }
};
