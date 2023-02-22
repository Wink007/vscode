import { Settings } from "../../pages/Layout/components/MenuBar/components/Settings/component/ContentInside/data";
import { ThemeSettings } from "../Theme";
import { CustomizeLayout } from "../CustomizeLayout";

import { PopupDataProps } from "./interface";

export const PopupData: Record<Settings, PopupDataProps> = {
  [Settings.theme]: {
    Component: ThemeSettings,
  },
  [Settings.customizeLayout]: {
    Component: CustomizeLayout,
  },
};
