import { FunctionComponent, memo, useContext } from "react";
import { PopupContext } from "../../../../../../components/Popup/components/PopupContext";
import { Tooltip } from "../../../../../../components/Tooltip";
import { useHover } from "../../../../../../hooks/useHover";
import { popupType } from "../../../../../../redux/popupType/actions";
import { Settings } from "../../../MenuBar/components/Settings/component/ContentInside/data";
import { ButtonToggleSidebarStyle } from "../../style";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../../hooks/useTypedSelector";

const ToggleCustomizeButtonComponent: FunctionComponent = () => {
  const type = useTypedSelector((state) => state.popup.popupType);

  const [isHovering, hoverProps] = useHover();
  const dispatch = useDispatch();

  const { isPopupOpened, handlePopupToggle } = useContext(PopupContext);

  const handleClick = () => {
    dispatch(popupType(Settings.customizeLayout));
    if (!isPopupOpened) {
      handlePopupToggle();
    }
    if (isPopupOpened && type === Settings.customizeLayout) {
      handlePopupToggle();
    }
  };

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
