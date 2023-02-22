import { POPUP_TYPE } from "./constants";

export function popupType(meta: string) {
  return {
    type: POPUP_TYPE,
    meta,
  };
}
