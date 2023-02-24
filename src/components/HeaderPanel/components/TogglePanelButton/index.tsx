import { FunctionComponent, memo, useContext } from "react";
import { useHover } from "../../../../hooks/useHover";
import { CustomLayoutContext } from "../../../CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { Tooltip } from "../../../Tooltip";

import { ButtonToggleSidebarStyle } from "../../style";

const TogglePanelButtonComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();

  const { isStatusBarOpened, setIsStatusBarOpened } =
    useContext(CustomLayoutContext);

  const icon = isStatusBarOpened ? "layout-panel" : "layout-panel-off";

  const handleClick = () => {
    setIsStatusBarOpened(!isStatusBarOpened);
  };

  return (
    <ButtonToggleSidebarStyle {...hoverProps} onClick={handleClick}>
      <span className={`codicon codicon-${icon}`} />
      {isHovering && (
        <Tooltip position="bottom">
          <span>Toggle Panel</span>
        </Tooltip>
      )}
    </ButtonToggleSidebarStyle>
  );
};

export const TogglePanelButton = memo(TogglePanelButtonComponent);
