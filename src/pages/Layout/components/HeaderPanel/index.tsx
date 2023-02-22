import { FunctionComponent, memo } from "react";
import { useLocation } from "react-router-dom";
import { ToggleSidebarButton } from "./components/ToggleSidebarButton";
import { ToggleCustomizeButton } from "./components/ToggleCustomizeButton";

import { HeaderPanelWrapperStyle, ToggleButtonsContentStyle } from "./style";
import { PageNames } from "../../../enum";
import { TogglePanelButton } from "./components/TogglePanelButton";

const HeaderPanelComponent: FunctionComponent = () => {
  const location = useLocation();

  const locationPathName =
    location.pathname === PageNames.welcome ? "" : location.pathname;

  return (
    <HeaderPanelWrapperStyle>
      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="path">
        {`portfolio/src${locationPathName}/index.tsx - Alex Klievtsov portfolio`}
      </div>
      <ToggleButtonsContentStyle>
        <TogglePanelButton />
        <ToggleSidebarButton />
        <ToggleCustomizeButton />
      </ToggleButtonsContentStyle>
    </HeaderPanelWrapperStyle>
  );
};

export const HeaderPanel = memo(HeaderPanelComponent);
