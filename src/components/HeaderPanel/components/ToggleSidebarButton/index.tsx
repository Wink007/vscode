import { FunctionComponent, memo, useContext } from "react";
import { useHover } from "../../../../hooks/useHover";
import { CustomLayoutContext } from "../../../CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { Tooltip } from "../../../Tooltip";
import { ButtonToggleSidebarStyle } from "../../style";

const ToggleSidebarButtonComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();

  const { isPrimarySideBarOpened, setIsPrimarySideBarOpened } =
    useContext(CustomLayoutContext);

  const icon = isPrimarySideBarOpened
    ? "layout-sidebar-right"
    : "layout-sidebar-right-off";

  const handleClick = () => {
    setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
  };

  return (
    <ButtonToggleSidebarStyle {...hoverProps} onClick={handleClick}>
      <span className={`codicon codicon-${icon}`} />
      {isHovering && (
        <Tooltip position="bottomRight">
          <span>Toggle Primary Side Bar</span>
        </Tooltip>
      )}
    </ButtonToggleSidebarStyle>
  );
};

export const ToggleSidebarButton = memo(ToggleSidebarButtonComponent);
