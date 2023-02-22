import { FunctionComponent, memo, useContext } from "react";
import { PopupContext } from "../../../../../../components/Popup/components/PopupContext";
import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { ButtonToggleSidebarStyle } from "../../style";

const ToggleCustomizeButtonComponent: FunctionComponent = () => {
  const [isHovering, hoverProps] = useHover();

  const { handlePopupToggle } = useContext(PopupContext);

  const handleClick = () => handlePopupToggle();

  return (
    <ButtonToggleSidebarStyle {...hoverProps} onClick={handleClick}>
      <span className="codicon codicon-layout" />
      {isHovering && (
        <Tooltip position="bottomRight">
          <span>Customize Layout</span>
        </Tooltip>
      )}
    </ButtonToggleSidebarStyle>
  );
};

export const ToggleCustomizeButton = memo(ToggleCustomizeButtonComponent);
