import { PAGE_ADD, REMOVE_PAGE } from "./constants";

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
