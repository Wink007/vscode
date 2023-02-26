import {
  PAGE_ADD,
  REMOVE_PAGE,
  RESET_PAGES,
  CLOSE_RIGHT,
  CLOSE_LEFT,
  CLOSE_OTHER,
} from "./constants";

export function addPage(meta: string) {
  return {
    type: PAGE_ADD,
    meta,
  };
}

export function removePage(meta: string) {
  return {
    type: REMOVE_PAGE,
    meta,
  };
}

export function resetPages() {
  return {
    type: RESET_PAGES,
  };
}

export function closeRight(meta: number) {
  return {
    type: CLOSE_RIGHT,
    meta,
  };
}
export function closeLeft(meta: number) {
  return {
    type: CLOSE_LEFT,
    meta,
  };
}
export function closeOther(meta: number) {
  return {
    type: CLOSE_OTHER,
    meta,
  };
}
