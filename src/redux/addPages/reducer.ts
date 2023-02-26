import {
  PAGE_ADD,
  REMOVE_PAGE,
  RESET_PAGES,
  CLOSE_RIGHT,
  CLOSE_LEFT,
  CLOSE_OTHER,
} from "./constants";
import { Action } from "../store.interface";
import { AddPageParams } from "./interface";
import { PageNames } from "../../pages/enum";

const initialState: AddPageParams = {
  pages: [PageNames.welcome],
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
    case CLOSE_RIGHT:
      if (action.meta) {
        return {
          ...state,
          pages: state.pages.slice(0, action.meta + 1),
        };
      }
      return {
        ...state,
      };

    case CLOSE_LEFT:
      if (action.meta) {
        const updatePages = state.pages.slice(action.meta);
        updatePages.unshift(PageNames.welcome);

        return {
          ...state,
          pages: updatePages,
        };
      }
      return {
        ...state,
      };

    case CLOSE_OTHER:
      if (action.meta) {
        const updatePages = state.pages.filter((item, index) => {
          return index === action.meta;
        });
        updatePages.unshift(PageNames.welcome);
        return {
          ...state,
          pages: updatePages,
        };
      }
      return {
        ...state,
      };

    case RESET_PAGES:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
